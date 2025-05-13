import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import InfoCard from "./InfoCard.jsx";


function InfoPanel({ searchResults, category, name }) {
  console.log("Info panel search results: ", searchResults, "category: ", category, "name: ", name)
  const cards = searchResults.map((searchResult) => {
    return (
      <Grid item key={searchResult.index}>
        <Box>
          <InfoCard searchResult={searchResult} category={category} name={name}/>
        </Box>
      </Grid>
    );
  });

  return <List>{cards}</List>;
}

export default InfoPanel;
