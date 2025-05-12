import { useState } from "react";

function SearchBar({ setSearchTerm, searchTerm }) {
  const [endpoint, setEndpoint] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setSearchTerm("https://www.dnd5eapi.co/api/2014/" + endpoint);
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        <input
          type="text"
          onChange={(event) => {
            setEndpoint(event.target.value);
          }}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
