import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SearchBar({ setSearchTerms }) {
  const [endpoint, setEndpoint] = useState("");

  function handleClick() {
    setSearchTerms((oldSearchTerms) => {
      return {
        ...oldSearchTerms,
      name: endpoint
      }
    })
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {}
      <TextField
        label="Search"
        variant="outlined"
        onChange={(event) => {
          setEndpoint(event.target.value);
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        {} Search
      </Button>
    </Box>

  );
}

export default SearchBar;
