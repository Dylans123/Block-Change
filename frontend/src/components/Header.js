import React from "react";
import { AppBar, Typography, Container } from "@material-ui/core"

const Header = () => {

  return (
    <AppBar position="static" style={{ backgroundColor: '#B4E178', color: 'black' }}>
      <Container maxWidth="sm">
        <div className="my-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5">
            Blockchange
          </Typography>
          <Typography className="ml-5">Create a new petition</Typography>
          <Typography className="ml-5">About</Typography>
          <Typography className="ml-5">Contact</Typography>
        </div>
      </Container>
    </AppBar>
)
}

export default Header;