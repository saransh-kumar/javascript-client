import React from 'react';
import { Route } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import PropTypes from 'prop-types';

const AuthRoute = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <AuthLayout>
            <Component {...matchProps} />
        </AuthLayout>
      )} />
    )
  };

AuthRoute.propTypes = {
    component: PropTypes.object.isRequired,
}
export default AuthRoute;

