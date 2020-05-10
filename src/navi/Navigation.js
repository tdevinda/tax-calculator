import React from 'react'
import {AppBar, Button, IconButton, Typography} from '@material-ui/core'
import {CALCULATOR_PATH, HOME_PATH} from "./paths";
import {Link} from "react-router-dom";
import ToolBar from '@material-ui/core/Toolbar'
import Avatar from "@material-ui/core/Avatar/Avatar";


function Navigation() {
  return (
    <AppBar position="static">
      <ToolBar>
        <IconButton edge='start'>
          <Avatar
            src='/img/tax.svg' />
        </IconButton>
        <Typography variant="h6">lankaincome.tax</Typography>
        { currentUser.currentUser ? (
          <>
            <Button
              component={Link}
              to={HOME_PATH}
            >
              Home
            </Button>
            <Button
              component={Link}
              to={CALCULATOR_PATH}
            >
              Calculator
            </Button>
            <Button onClick={() => {firebaseApp.auth().signOut()}}>
              Logout
            </Button>
          </>
        ) : (
          <Button
            component={Link}
            to='/login'>
            Login
          </Button>
        )}
      </ToolBar>
    </AppBar>

  );
}

export default Navigation