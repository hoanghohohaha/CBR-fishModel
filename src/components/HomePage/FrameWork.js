import { Grid, Typography } from "@mui/material";
import React from "react";

export default function FrameworkSection() {
  return <>
    <Grid container style={{marginTop:120}} justifyContent="center">
      <Grid item xs={12}>
        <Typography style={{ fontSize: 32, fontWeight: 700 }}>
          Models' Framework
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <div style={{
          marginTop:24,
          width: "100%",
          height: "700px",
          backgroundImage: 'url("https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png")'
        }}>
          
        </div>
      </Grid>
    </Grid>
  </>
}