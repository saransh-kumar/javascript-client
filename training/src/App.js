import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import themeStyle from './theme';
// import {Trainee} from './pages'
// import { TextFieldDemo } from './pages/index';
// import { InputDemo } from '../src/pages/index';
// import { ChildrenDemo } from './pages/ChildrenDemo/index';
import { Login } from './pages/index';
// import { Navbar } from './pages';


function App() {
  return (
    <>
      <ThemeProvider theme={themeStyle}>
          {/* <ChildrenDemo /> */}
          {/* <TextFieldDemo /> */}
          {/* <InputDemo /> */}
          <Login />
          {/* < Navbar /> */}
          {/* <Trainee /> */}
      </ThemeProvider>
    </>
  );
}

export default App;