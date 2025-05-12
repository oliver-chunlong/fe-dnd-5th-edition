import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

function Category() {
  const categories = ["Classes", "Spells", "Features"];

  //   useEffect(() => {
  // }, []);

  return categories.map((category) => {
    return (
      <Grid item xs={12}>
        <Button>{category}</Button>
      </Grid>
    );
  });
}

export default Category;
