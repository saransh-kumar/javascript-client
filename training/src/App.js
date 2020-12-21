import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import themeStyle from './theme';
import { Trainee } from './pages'
import { TextFieldDemo } from './pages/index';
import { InputDemo } from '../src/pages/index';
import { ChildrenDemo } from './pages/ChildrenDemo/index';
import { Login } from './pages/index';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { AuthRoute, PrivateRoute } from './Routes/index';
import { NoMatch } from './pages/NoMatch';

function App() {
 
  return (
    
    <>
      <ThemeProvider theme={themeStyle}>
        <Router>
          <Switch>
            <Route exact path="/" component={ Trainee }>
              <Redirect to="/Trainee" />
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
    </>
  );
}

export default App;