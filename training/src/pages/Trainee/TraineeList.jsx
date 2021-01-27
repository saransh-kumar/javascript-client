import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { AddDialog, EditDialog, DeleteDialog } from './components';
import { Tables } from '../../components/index';
import { getFormattedDate } from '../../lib/utils/getFormattedDate';
import callApi from '../../lib/utils/api';

const asend = 'asc';
const dsend = 'desc';
class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      sortedBy: 'createdAt',
      order: dsend,
      sortedOrder: -1,
      page: 0,
      edit: false,
      deleteDialog: false,
      skip: 0,
      limit: 10,
      loader: false,
      traineeInfo: {},
      database: [],
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({ loader: true});
    this.renderData();
  }

  onOpen = () => {
    this.setState({ open: true });
  };

  onCloseEvent = () => {
    this.setState({ open: false });
  };

  editDialogOpen = (item) => {
    this.selectedItem = item;
    this.setState({ edit: true, traineeInfo: item });
  };

  editDialogClose = () => {
    this.selectedIem = null;
    this.setState({ edit: false });
  };

  handleEdit = (item) => {
    console.log(item);
    this.editDialogClose();
  }

  deleteDialogOpen = (item) => {
    this.selectedIem = item;
    this.setState({ deleteDialog: true, traineeInfo: item });
  };

  deleteDialogClose = () => {
    this.selectedIem = null;
    this.setState({ deleteDialog: false });
  };

  handleDelete = () => {
    const { traineeInfo } = this.state;
    console.log(traineeInfo);
    this.deleteDialogClose();
  }

  handleSort = (field) => {
    const { order, sortedBy } = this.state;
    let tabOrder = asend, sequence = -1;
    if (sortedBy === field && order === asend) {
      tabOrder = dsend;
      sequence = 1;
    }
    this.setState({ sortedBy: field, order: tabOrder, sortedOrder: sequence });
  }
  
  handlePageChange = (newPage, value) => {
    console.log('New Page ',newPage,'Value ', value);
    this.setState({ page: value, skip: value*10}, () => {
      this.renderData();
      console.log('Skip ',this.state.skip);
      console.log('Page', this.state.page);
      console.log('Count', this.state.count);
    });
    
  }

  handleSubmit = () => {
    this.setState({ open: false });
  }

  handleSelect = (id) => {
    const { match, history } = this.props;
    return (
      history.push(`${match.path}/${id}`)
    );
  }

  renderData = async() => {
    const { limit, skip, sortedBy, sortedOrder } = this.state;
    await callApi(`/trainee?limit=${limit}&skip=${skip}&sortedBy=${sortedBy}&sortedOrder=${sortedOrder}`, 'GET')
      .then((response) => {
        this.setState({ database: response.data.data.records, count: response.data.data.totalCount });
        console.log('Response',response);
        this.setState({ loader: false});
      })
      .catch(() => {
        console.log('there is an errror');
      })
  }

  render() {
    const { open, deleteDialog, order, sortedBy, page, edit, database, loader, traineeInfo, limit, count } = this.state;
    return (
      <>
        <div style={{float:'right'}}>
          <AddDialog
            open={open}
            onClose={this.onCloseEvent}
            onSubmit={this.handleSubmit}
            renderTrainee={this.renderData}
          />
        </div>
        {
          (
          <Tables
            id="id"
            data={database}
            column={[
              {
                field: 'name',
                label: 'Name',
              },
              {
                field: 'email',
                label: 'Email Address',
                format: (value) => value && value.toUpperCase(),
              },
              {
                field: 'createdAt',
                label: 'Date',
                align: 'right',
                format: getFormattedDate,
              },
            ]}
            actions={[
              {
                icon: <EditIcon />,
                handler: this.editDialogOpen,
              },
              {
                icon: <DeleteIcon />,
                handler: this.deleteDialogOpen,
              },
            ]}
            sortedBy={sortedBy}
            order={order}
            onSort={this.handleSort}
            count={count}
            page={page}
            rowsPerPage={limit}
            onPageChange={this.handlePageChange}
            onSelect={this.handleSelect}
            loader={loader}
            dataCount={count}
          />
          )
        }
        <>
          { edit && (
            <EditDialog
              editOpen={edit}
              onClose={this.editDialogClose}
              details={traineeInfo}
              renderTrainee={this.renderData}
            />
          )}
          { deleteDialog && (
            <DeleteDialog
              deleteOpen={deleteDialog}
              onClose={this.deleteDialogClose}
              details={traineeInfo}
              renderTrainee={this.renderData}
            />
          )}
        </>
      </>
    );
  }
}
TraineeList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TraineeList;