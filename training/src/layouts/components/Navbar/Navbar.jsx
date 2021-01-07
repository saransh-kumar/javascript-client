import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
// import { callApi } from '../../../lib/utils/api';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    }
  })
);

export default function Navbar() {
  const classes = useStyles();

  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Trainee Portal
          </Typography>
          <Button component={Link} to="/Trainee" color="inherit">Trainee</Button>
          <Button component={Link} to="/TextFieldDemo" color="inherit">TextField Demo</Button>
          <Button component={Link} to="/InputDemo" color="inherit">Input Demo</Button>
          <Button component={Link} to="/ChildrenDemo" color="inherit" style={{marginRight: '100px'}}>Children Demo</Button>
          <Button 
            color="inherit"
            component={Link} to="/login"
            onClick= { handleLogout }
          >
          Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
