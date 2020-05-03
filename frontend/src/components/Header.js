import React from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@material-ui/core"

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="h6">
            Blockchain-ge
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header;