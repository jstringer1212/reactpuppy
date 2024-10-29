import React from 'react';
import { Drawer, List, ListItem, ListItemText, CssBaseline, Toolbar, AppBar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

function LeftNavBar({ navBarWidth }) {
  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Top AppBar */}
      <AppBar position="fixed" style={{ zIndex: 1201 }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Puppy Bowl
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{
          style: { width: navBarWidth }
        }}
      >
        <Toolbar />
        <div style={{ overflow: 'auto' }}>
          <List>
            <ListItem button component={NavLink} to="/AllPlayers">
              <ListItemText primary="All Puppies" />
            </ListItem>
            <ListItem button component={NavLink} to="/NewPlayerForm">
              <ListItemText primary="Add Puppy" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default LeftNavBar;
