import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AddDialog } from './components';
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
    };
  }

  onOpen = () => {
    this.setState({ open: true });
  }

  onCloseEvent = () => {
    this.setState({ open: false });
  };

  handleSort = (field) => {
    const { order, orderBy } = this.state;
    let tabOrder = asend;
    if (orderBy === field && order === asend) {
      tabOrder = dsend;
    }
    this.setState({ orderBy: field, order: tabOrder });
  }

  handleSelect = (data) => {
    const { history } = this.props;
    history.push(`/trainee/${data.id}`);
  }

  render() {
    const { open, order, orderBy } = this.state;
    const { match } = this.props;
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <AddDialog
            open={open}
            onClose={this.onCloseEvent}
            onSubmit={this.onCloseEvent}
            align='right'
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
          orderBy={orderBy}
          order={order}
          onSort={this.handleSort}
          onSelect={this.handleSelect}
        />
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default TraineeList;