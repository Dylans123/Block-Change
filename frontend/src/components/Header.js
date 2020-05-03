import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Blockchain-ge
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header;