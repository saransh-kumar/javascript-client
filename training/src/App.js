import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import themeStyle from './theme';
import { Trainee } from './pages'
import { TextFieldDemo } from './pages/index';
import { InputDemo } from '../src/pages/index';
import { ChildrenDemo } from './pages/ChildrenDemo/index';
import { Login } from './pages/index';
import { AuthRoute, PrivateRoute } from './Routes/index';
import { NoMatch } from './pages/NoMatch';
import { SnackBarProvider } from './contexts/index';

function App() {
 
  return (
    
    <>
    <SnackBarProvider>
      <ThemeProvider theme={ themeStyle }>
        <Router>
          <Switch>
            <Route exact path="/" component={ Login }>
              <Redirect to="/login" />
            </Route>
            <AuthRoute path="/login" component={ Login } />
            <PrivateRoute path="/ChildrenDemo" component={ ChildrenDemo } />
            <PrivateRoute path="/TextFieldDemo" component={ TextFieldDemo } />
            <PrivateRoute path="/InputDemo" component={ InputDemo } />
            <PrivateRoute path="/Trainee" component={ Trainee } />
            <PrivateRoute component={ NoMatch } />
          </Switch>
        </Router>
      </ThemeProvider>
     </SnackBarProvider>
    </>
  );
}

export default App;