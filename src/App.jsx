import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import SearchBar from "./components/SearchBar.jsx";
import InfoPanel from "./components/InfoPanel.jsx";
import Category from "./components/Category.jsx";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DataRenderer from "./components/DataRenderer.jsx"

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerms, setSearchTerms] = useState({category: "", name: ""}) 
  const [display, setDisplay] = useState()

  useEffect(() => {
    const category = searchTerms.category
    const name = searchTerms.name
    if (category) {
      setLoading(true)
      const url = "https://www.dnd5eapi.co/api/2014/" + category + "/" + name
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        if (body.results) {
          return setSearchResults(body.results)
        }
        return setSearchResults([body])
      })
      .then(() => {
          setLoading(false)
        })
     }
    }, [searchTerms]);

    useEffect(() => console.log(display, [display]))


    return (
      <Container>

        <Box sx={{
          position: 'fixed', // Fixes this Box to the viewport
          top: 0,            // Positions it at the top edge
          left: 0,           // Positions it at the left edge
          width: '100%',     // Makes it span the full width
          zIndex: 1000,      // Ensures it's on top of other content
          backgroundColor: 'white', // Adds a background
          boxShadow: 3,      // Adds a subtle shadow
          paddingBottom: 2,  // Adds padding at the bottom
        }}>
          <Typography variant="h2"
            component="div"
            align="center" // Centers the text horizontally
            sx={{
              paddingTop: 2,
              paddingBottom: 1,
            }}>

            Dungeons & Dragons: 5th Edition

          </Typography>
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid container // This is the new inner grid for horizontal categories
            direction="row" // Arrange items horizontally
            justifyContent="center" // Center items horizontally
            spacing={1} // Add some horizontal spacing between category items
            > 
              <Category setSearchTerms={setSearchTerms}/> 
            </Grid>
            <Grid item xs={12} md={8}>
              <SearchBar
              setSearchTerms={setSearchTerms}
              searchTerms={searchTerms}
              ></SearchBar>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{
            marginTop: 25, // Adds space at the top to push content below the fixed header
          }}>
          <Grid container direction="column" spacing={2}>
          {
            loading
              ? 
            <Grid item>
              <p>Loading...</p>
            </Grid >
            : 
            <InfoPanel setDisplay={setDisplay} searchResults={searchResults}/>
            }
          </Grid>
        </Box>

        <DataRenderer data={display}/>

      </Container>
)
  
  
  //   (<Container maxWidth="lg">
  //         <Typography position="fixed" variant="h1" component="div" sx={{
  //         position: 'fixed',
  //         top: 0,
  //         left: 0,
  //         width: '100%',
  //         // backgroundColor: 'lightblue',
  //         padding: 2, // MUI spacing unit (8px by default)
  //         textAlign: 'center',
  //         zIndex: 1000,
  //       }}>
  //           Dungeons & Dragons: 5th Edition
  //         </Typography>
  //     <Grid container direction="column" spacing={2} sx={{
  //       padding: 20,
  //       position: 'fixed',
  //       // width: '100%',
  //       // backgroundColor: 'lightblue',       
  //       zIndex: 1000,
  //       }}>

  //       <Grid container direction="row">
  //         <Category setSearchTerm={setSearchTerm} />
  //       </Grid>

  //       <Grid item xs={12} md={8}>
  //         <SearchBar
  //           setSearchResults={setSearchResults}
  //           setSearchTerm={setSearchTerm}
  //           searchTerm={searchTerm}
  //         ></SearchBar>
  //       </Grid>
  //       {
  //       loading
  //         ? 
  //       <Grid>
  //         <p>Loading...</p>
  //       </Grid>
  //       : 
  //       (<Grid item xs={12} md={4}>
  //         <InfoPanel searchResults={searchResults} />
  //       </Grid>)
  //       }
  //     </Grid>
  //   </Container>
  // );

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
