import React, { Component } from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

class SignModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      recipient: '',
      title: '',
      description: '',
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  handleChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  render() {
    const { open, handleClose, handleCreate } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Enter the information about your cause below to create a petition"}</DialogTitle>
        <DialogContent>
          <form>
            <div class="form-group">
              <label for="category">Category</label>
              <input type="text" class="form-control" id="category" name="category" onChange={(e) => {this.handleChange(e)}} placeholder="Category" />
            </div>
            <div class="form-group">
              <label for="recipient">Recipient</label>
              <input type="text" class="form-control" id="recipient" name="recipient" onChange={(e) => {this.handleChange(e)}} placeholder="Recipient" />
            </div>
            <div class="form-group">
              <label for="title">Title</label>
              <input type="text" class="form-control" id="title" name="title" onChange={(e) => {this.handleChange(e)}} placeholder="Title" />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textfield type="text" class="form-control" id="description" name="description" onChange={(e) => {this.handleChange(e)}} placeholder="Description" />
            </div>
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
          <Button onClick={() => {handleCreate(this.state)}} autoFocus>
            Sign
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default SignModal;