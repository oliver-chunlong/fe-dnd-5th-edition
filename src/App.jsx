import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchBar from "./components/SearchBar.jsx";
import InfoPanel from "./components/InfoPanel.jsx";
import Category from "./components/Category.jsx";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch(searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setSearchResults(body.results);
      });
  }, [searchTerm]);

  return (
    <Container maxWidth="lg">
      <Grid container direction="column" spacing={2}>
        <Grid item xs={12}>
          <h1>Dungeons & Dragons: 5th Edition</h1>
        </Grid>

        <Grid container direction="row">
          {<Category />}
        </Grid>

        <Grid item xs={12} md={8}>
          <SearchBar
            setSearchResults={setSearchResults}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
          ></SearchBar>
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoPanel searchResults={searchResults} />
        </Grid>
      </Grid>
    </Container>
  );

  // return (
  //   <>
  //     <div>
  //       <h1>Dungeons & Dragons: 5th Edition</h1>
  // <SearchBar
  //   setSearchResults={setSearchResults}
  //   setSearchTerm={setSearchTerm}
  //   searchTerm={searchTerm}
  // ></SearchBar>;
  //       <InfoPanel searchResults={searchResults} />
  //     </div>
  //   </>
  // );
}

export default App;
