import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import * as yup from 'yup';
import { Div } from './style';

class AddDialog extends React.Component {
  constructor() {
    super();
    this.state = {
        open: false,
        touched: {
            name: false,
            email: false,
            password: false,
            confirm: false,
        },
    };
  }

schema = yup.object().shape({
    name: yup.string()
      .required()
      .min(3),
    email: yup.string()
      .email()
      .required(),
    password: yup.string()
      .required('password is missing')
      .matches(/(?=.*[a-z])/, 'should have atleast one lowercase')
      .matches(/(?=.*[A-Z])/, 'should have atleast one uppercase')
      .matches(/(?=.*[0-9])/, 'should have atleast one number')
      .matches(/(?=.*[@#$%^&+=])/, 'should have atleast one special character')
      .min(8,'minimum 8 characters'),
    confirm: yup.string()
      .required('confirm password is missing').min(3),
      // .oneOf([yup.ref('password')], 'confirm password not same'),
});

handleClickOpen = () => {
  this.setState({
    open: true
  });
}

handleClose = () => {
  this.setState({
    open: false
  });
}

getError(field) {
  const { touched } = this.state;
  if (touched[field] && this.hasErrors()) {
    try {
      this.schema.validateSyncAt(field, this.state);
    } catch (err) {
      return err.message;
    }
  }
}

hasErrors(){
    try {
      this.schema.validateSync(this.state);
    } catch (err) {
      return true;
    }
    return false;
}

isTouched(field){
    const { touched } = this.state;
    this.setState({
      touched: {
        ...touched,
        [field]: true,
      },
    });
}
render() {

  const { name, email, password, confirm,  open } = this.state;

  const handleNameChange = (event) => {
    this.setState( {name: event.target.value}, () => {
      console.log(this.state);
    });
  }
  const handleEmailChange = (event) => {
    this.setState( {email: event.target.value}, () => {
      console.log(this.state);
    });
  }
  const handlePasswordChange = (event) => {
    this.setState( {password: event.target.value}, () => {
      console.log(this.state);
    });
  }
  const handleConfirmChange = (event) => {
    this.setState( {confirm_password: event.target.value}, () => {
      console.log(this.state);
    });
  }
    return (
      <div>
        <Button variant='outlined' color='primary' onClick={this.handleClickOpen}>
          Add Trainee
        </Button>
        <Dialog
          open={open}
          onClick={this.handleClosed}
          aria-labelledby='form-dialog-title'
          autoFocus={false}
        >
          <DialogTitle id='form-dialog-title'>Add Trainee</DialogTitle>
          <DialogContent>
            <DialogContentText>Enter Trainee Details</DialogContentText>
            <TextField
              margin='dense'
              id='name'
              label='Name*'
              type='name'
              value= { name }
              variant='outlined'
              error={ this.getError('name') }
              onBlur={ () => { this.isTouched('name')} }
              onChange={ handleNameChange }
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                )
              }}
              fullWidth
            />
            <Div><p>{ this.getError('name')}</p></Div>
            <TextField
              margin='dense'
              label='Email Address'
              id='email'
              type='email'
              value= { email }
              variant='outlined'
              error={ this.getError('email') }
              onBlur={ () => { this.isTouched('email')} }
              onChange= { handleEmailChange }
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <MailIcon />
                  </InputAdornment>
                )
              }}
              fullWidth
            />
            <Div><p>{this.getError('email')}</p></Div>
            <Box display='flex'>
            <div>
              <div>
                <TextField
                  margin='dense'
                  value = { password }
                  id='password'
                  label='Password'
                  type='password'
                  variant='outlined'
                  error={ this.getError('password') }
                  onBlur={ () => { this.isTouched('password')} }
                  onChange= { handlePasswordChange }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <VisibilityOffIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
            <Div><p>{this.getError('password')}</p></Div>
              </div>
            <div>
              <div>
                <TextField
                  margin='dense'
                  value={ confirm }
                  id='confirm'
                  label='Confirm Password'
                  type='password'
                  variant='outlined'
                  error={ this.getError('confirm') }
                  onBlur={ () => { this.isTouched('confirm')} }
                  onChange= { handleConfirmChange }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <VisibilityOffIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              <Div><p>{this.getError('confirm')}</p></Div>
            </div>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={this.handleClose} color='primary' disabled={this.hasErrors()}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddDialog;
