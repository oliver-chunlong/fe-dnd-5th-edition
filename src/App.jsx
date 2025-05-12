import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import InfoPanel from "./components/InfoPanel.jsx";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log(searchTerm)
    fetch(searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        setSearchResults(body.results);
      });
  }, [searchTerm]);

  return (
    <>
      <div>
        <h1>Dungeons & Dragons: 5th Edition</h1>
        <SearchBar
          setSearchResults={setSearchResults}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        ></SearchBar>

        <InfoPanel searchResults={searchResults} />
      </div>
    </>
  );
}

export default App;
