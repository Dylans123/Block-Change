import React from "react";
import { AppBar, Typography, Container, Button } from "@material-ui/core"

const Header = ({ handleOpen }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#B4E178', color: 'black' }}>
      <Container maxWidth="sm">
        <div className="my-3" style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5">
            BLOCKCHANGE
          </Typography>
          <Button className="ml-4 p-0" style={{ textTransform: 'none' }} onClick={handleOpen()}>Create petition</Button>
          <Button className="ml-4" style={{ textTransform: 'none' }}>About</Button>
          <Button className="ml-4" style={{ textTransform: 'none' }}>Contact</Button>
        </div>
      </Container>
    </AppBar>
)
}

export default Header;