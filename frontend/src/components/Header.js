import React from 'react'
import Logo from '../assets/Logo.png'
import { AppBar, Typography, Container, Button } from "@material-ui/core"

const Header = ({ handleOpen }) => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#B4E178', color: 'black' }}>
      <Container maxWidth="md">
        <div className="my-3" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} width='25%' />
          <Button style={{ marginLeft: '75px' }} onClick={() => handleOpen()}>
            <Typography variant="h6" style={{ fontWeight: 900 }}>Create petition</Typography>
          </Button>
          <Button style={{ marginLeft: '75px' }}>
            <Typography variant="h6" style={{ fontWeight: 900 }}>About</Typography>
          </Button>
          <Button style={{ marginLeft: '75px' }}>
            <Typography variant="h6" style={{ fontWeight: 900 }}>Contact</Typography>
          </Button>
        </div>
      </Container>
    </AppBar>
)
}

export default Header;