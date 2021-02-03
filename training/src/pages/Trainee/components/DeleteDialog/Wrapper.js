import React from 'react';
import { Mutation } from '@apollo/react-components';
import { DELETE_USER } from './Mutation';

import DeleteDialog from './DeleteDialog';

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const prop = this.props;
    return (
      <Mutation mutation={DELETE_USER}>
        {(deleteTrainee) => (
          <>
            <DeleteDialog deleteTrainee={deleteTrainee} {...prop} />
          </>
        )}
      </Mutation>
    );
  }
}