import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function FixedTitleAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dungeons & Dragons: 5th Edition
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box sx={{ p: 2 }}>
        {/* Your page content goes here */}
        <Typography variant="body1">
          This is the main content of the page. Scroll down to see the fixed title.
        </Typography>
        {/* Add more content to make the page scrollable */}
        {[...Array(50)].map((_, index) => (
          <Typography key={index} variant="body1">
            Content line {index + 1}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

export default FixedTitleAppBar;