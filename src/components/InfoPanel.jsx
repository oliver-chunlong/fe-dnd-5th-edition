import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import InfoCard from "./InfoCard.jsx";


function InfoPanel({ searchResults, category }) {
  const cards = searchResults.map((searchResult) => {
    return (
      <Grid item key={searchResult.index}>
        <Box>
          <InfoCard cardInfo={searchResult} />
        </Box>
      </Grid>
    );
  });

  return <List>{cards}</List>;
}

export default InfoPanel;
