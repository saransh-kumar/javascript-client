import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import themeStyle from './theme';
// import {Trainee} from './pages'
// import { TextFieldDemo } from './pages/index';
import { InputDemo } from '../src/pages/index';
// import { ChildrenDemo } from './pages/ChildrenDemo/index';


function App() {
  return (
    <>
      <ThemeProvider theme={themeStyle}>
          {/* <Trainee /> */}
          {/* <ChildrenDemo /> */}
          {/* <TextFieldDemo /> */}
          <InputDemo />
      </ThemeProvider>
    </>
  );
}

export default App;


      {/* <AddDialog /> */}
      {/* <ChildrenDemo /> */}
      {/* <TextFieldDemo /> */}
      <InputDemo />