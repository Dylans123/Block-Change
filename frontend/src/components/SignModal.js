import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@material-ui/core';

const SignModal = ({ open, handleClose, petition }) => {
  console.log(petition);
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
            <input type="text" class="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name" />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Last Name" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleClose} autoFocus>
          Sign
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignModal;