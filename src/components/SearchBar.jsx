import { useState } from "react";

function SearchBar({ setSearchTerm, searchTerm }) {
  const [category, setCategory] = useState("");

  function handleClick(event) {
    event.preventDefault();
    setSearchTerm("https://www.dnd5eapi.co/api/2014/" + category);
  }

  return (
    <form onSubmit={handleClick}>
      <label>
        <input
          type="text"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
      </label>
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
