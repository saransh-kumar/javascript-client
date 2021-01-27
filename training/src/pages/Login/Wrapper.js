/* eslint-disable react/display-name */
import React from 'react';
import { Mutation } from '@apollo/react-components';
import { LOGIN_USER } from './mutation';
import Login from './login';

const updateCache = (cache, { data: { loginUser } }) => {
  cache.writeData({ data: { token: loginUser } });
};

export default () => (
  <Mutation mutation={LOGIN_USER} update={updateCache}>
    {(loginUser) => (
      <>
        <Login loginUser={loginUser} />
      </>
    )}
  </Mutation>
);