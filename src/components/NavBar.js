import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={ { mr: 2 } }/>
        <Typography variant="h6" color="inherit" noWrap>
          Movie App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}