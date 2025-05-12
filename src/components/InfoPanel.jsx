import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import InfoCard from "./InfoCard.jsx";

function InfoPanel({ searchResults }) {
  const cards = searchResults.map((searchResult) => {
    // console.log(searchResult)
    return (
      <ListItem key={searchResult.index}>
        <Box>
          <InfoCard cardInfo={searchResult} />
        </Box>
      </ListItem>
    );
  });

  return <List>{cards}</List>;
}

export default InfoPanel;
