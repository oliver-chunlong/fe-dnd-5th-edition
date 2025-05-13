import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import InfoCard from "./InfoCard.jsx";


function InfoPanel({ searchResults, setDisplay }) {
  const cards = searchResults.map((searchResult) => {
    return (
      <Grid item key={searchResult.index}>
        <Box>
          <InfoCard setDisplay={setDisplay} searchResult={searchResult}/>
        </Box>
      </Grid>
    );
  });

  return <List>{cards}</List>;
}

export default InfoPanel;
