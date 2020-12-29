import React from 'react';
import PropTypes from 'prop-types';
import { TraineeList, TraineeDetail } from '../Trainee/index';
import { Switch, Route } from 'react-router-dom';

export default class Trainee extends React.Component{
    render() {
        const { match: { path } } = this.props;
        return (
            <>
                <Switch>
                    <Route exact path={path} component={TraineeList} />
                    <Route exact path={`${path}/:traineeId`} component={TraineeDetail} />
                </Switch>
            </>
        );
    }
}

Trainee.propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };