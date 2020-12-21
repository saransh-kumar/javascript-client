import React from 'react';
import { Route } from 'react-router-dom';
import { PrivateLayout } from '../layouts';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <PrivateLayout>
            <Component {...matchProps} />
        </PrivateLayout>
      )} />
    )
  };

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
}
export default PrivateRoute;