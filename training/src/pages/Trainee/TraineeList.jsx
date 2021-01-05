import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { AddDialog, EditDialog, DeleteDialog } from './components';
import trainees from './data/trainee';
import { Tables } from '../../components/index';
import { getFormattedDate } from '../../lib/utils/getFormattedDate';

const asend = 'asc';
const dsend = 'desc';
class TraineeList extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      orderBy: '',
      order: asend,
      page: 0,
      edit: false,
      deleteDialog: false,
      traineeInfo: {},
    };
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
    const { order, orderBy } = this.state;
    let tabOrder = asend;
    if (orderBy === field && order === asend) {
      tabOrder = dsend;
    }
    this.setState({ orderBy: field, order: tabOrder });
  }
  
  handlePageChange = (event, page) => {
    this.setState({ page });
  }

  handleSubmit = () => {
    this.setState({ open: false });
  }

  render() {
    const {
      open,
      deleteDialog,
      order,
      orderBy,
      page,
      edit,
    } = this.state;
    const { match } = this.props;
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <AddDialog
            open={open}
            onClose={this.onCloseEvent}
            onSubmit={this.handleSubmit}
          />
        </div>
        <Tables
          id="id"
          data={trainees}
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
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          count={100}
          page={page}
          onPageChange={this.handlePageChange}
        />
        <>
          { edit && (
            <EditDialog
              editOpen={edit}
              onClose={this.editDialogClose}
              details={trainees}
            />
          )}
          { deleteDialog && (
            <DeleteDialog
              deleteOpen={deleteDialog}
              onClose={this.deleteDialogClose}
              details={trainees}
            />
          )}
        </>
        <div>
          {
            trainees.map((item) => (
              <ul key={item.id}>
                <li>
                  <Link to={`${match.path}/${item.id}`}>{item.name}</Link>
                </li>
              </ul>
            ))
          }
        </div>
      </>
    );
  }
}
TraineeList.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TraineeList;