import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer(props) {
  return (
    <>
      <Grid container>
        <Grid item>
          <Typography display="inline" variant="body2">Developed with ☕ and 🐟 by </Typography>
          <a href="https://www.linkedin.com/in/hoang-nguyen-055444197" style={{textDecoration:"none"}}><Typography display="inline" variant="body2">@bucc</Typography></a>
        </Grid>
      </Grid>
    </>
  )
}