import React from 'react';
import PropTypes from 'prop-types';
import { TraineeList, TraineeDetail } from '../Trainee/index';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../../lib/apollo-client';


function Trainee(props) {
        const { match: { path } } = props;
        return (
            <ApolloProvider client={ apolloClient }>
                <Switch>
                    <Route exact path={path} component={TraineeList} />
                    <Route exact path={`${path}/:traineeId`} component={TraineeDetail} />
                </Switch>
            </ApolloProvider>
        );
}

Trainee.propTypes = {
    match: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default Trainee;