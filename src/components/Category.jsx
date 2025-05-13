import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Category({setSearchTerms}) {
  const categories = ["Classes", "Spells", "Features"];

  function changeCategory(category) {
    return () => setSearchTerms((oldSearchTerms) => {
      return {
        name: "",
        category: category.toLowerCase()
      }
    });
  }

  return categories.map((category) => {
    return (
      <Grid item xs={12}>
        <Button onClick={changeCategory(category)} key={category}>{category}</Button>
      </Grid>
    );
  });
}

export default Category;
