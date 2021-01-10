import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CircularProgress from '@material-ui/core/CircularProgress';

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
      limit: 20,
      traineeInfo: {},
      database: [],
      loader: false,
    };
  }

  componentDidMount() {
    this.setState({ loader: true});
    this.renderData();
    this.setState({ loader: false});
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
  
  handlePageChange = (event, page) => {
    this.setState({ page });
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
        this.setState({ database: response.data.data.records });
        this.state.database === [] ? console.log('OOPS!, No More Trainees') : console.log('');
      })
      .catch(() => {
        console.log('there is an errror');
      })
  }

  render() {
    const { open, deleteDialog, order, sortedBy, page, edit, database, loading, traineeInfo } = this.state;
    return (
      <>
        <div style={{float:'right'}}>
          <AddDialog
            open={open}
            onClose={this.onCloseEvent}
            onSubmit={this.handleSubmit}
          />
        </div>
        {
          loading ? (
            <CircularProgress size={150} color="secondary" style={{marginLeft: '43%',marginTop:'20%'}}/>
          ) :
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
            count={100}
            page={page}
            onPageChange={this.handlePageChange}
            onSelect={this.handleSelect}
          />
          )
        }
        <>
          { edit && (
            <EditDialog
              editOpen={edit}
              onClose={this.editDialogClose}
              details={traineeInfo}
            />
          )}
          { deleteDialog && (
            <DeleteDialog
              deleteOpen={deleteDialog}
              onClose={this.deleteDialogClose}
              details={traineeInfo}
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