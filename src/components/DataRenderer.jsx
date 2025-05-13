import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'; // Optional: for visual separation

function DataRenderer({ data, level = 0 }) {
  // Base Case: Primitive types
  if (typeof data !== 'object' || data === null) {
    return (
      <Typography variant="body2" component="span">
        {String(data)} {/* Convert to string for display */}
      </Typography>
    );
  }

  // Array Case
  if (Array.isArray(data)) {
    if (data.length === 0) {
      return <Typography variant="body2">[] (Empty Array)</Typography>;
    }
    return (
      <List dense disablePadding> {/* disablePadding to control spacing */}
        {data.map((item, index) => (
          <ListItem key={index} disablePadding> {/* disablePadding for list item */}
            <Box sx={{ pl: level * 2 }}> {/* Add padding based on recursion level */}
              <DataRenderer data={item} level={level + 1} /> {/* Recursive call */}
            </Box>
          </ListItem>
        ))}
      </List>
    );
  }

  // Object Case
  const keys = Object.keys(data);
  if (keys.length === 0) {
    return <Typography variant="body2">{} (Empty Object)</Typography>;
  }

  return (
    <Box sx={{ pl: level * 2 }}> {/* Add padding based on recursion level */}
      {keys.map((key) => (
        <Box key={key} sx={{ mt: 1 }}> {/* Add margin between key-value pairs */}
          <Typography variant="subtitle2" component="span" sx={{ fontWeight: 'bold' }}>
            {key}: {/* Display the key */}
          </Typography>
          <Box sx={{ pl: 1, display: 'inline-block', verticalAlign: 'top' }}> {/* Indent the value */}
             <DataRenderer data={data[key]} level={level + 1} /> {/* Recursive call for value */}
          </Box>
          {/* Optional: Add a divider between properties at certain levels */}
          {level < 2 && <Divider sx={{ my: 1 }} />}
        </Box>
      ))}
    </Box>
  );
}

export default DataRenderer;