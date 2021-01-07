import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthLayout } from '../layouts';
import PropTypes from 'prop-types';

const AuthRoute = ({component: Component, ...rest}) => {
    if(!localStorage.getItem('token'))
    {
      return (
      <Route {...rest} render={matchProps => (
        <AuthLayout>
            <Component {...matchProps} />
        </AuthLayout>
      )} />
    ) }
    else {return <Redirect to = '/trainee' />}
  };

AuthRoute.propTypes = {
    component: PropTypes.object.isRequired,
}
export default AuthRoute;

