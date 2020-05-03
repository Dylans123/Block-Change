import React, { Component } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

class SignModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  render() {
    const { open, handleClose, handleSignature, petition } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Type your information below to sign "} {petition != null ? petition.title : null }</DialogTitle>
        <DialogContent>
          <form>
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" class="form-control" id="firstName" name="firstName" onChange={(e) => {this.handleChange(e)}} placeholder="First Name" />
            </div>
            <div class="form-group">
              <label for="lastName">Last Name</label>
              <input type="text" class="form-control" id="lastName" name="lastName" onChange={(e) => {this.handleChange(e)}} placeholder="Last Name" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" name="email" onChange={(e) => {this.handleChange(e)}} placeholder="Email" />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => {handleSignature(petition, this.state)}} autoFocus>
            Sign
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignModal;