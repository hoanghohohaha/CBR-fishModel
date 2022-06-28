import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export default function ContactSection(){
  return <>
    <Grid container justifyContent={"center"} style={{ marginTop: 100 }}>
      <Grid xs={12} style={{margin: 24}}>
        <Typography style={{fontSize:32, fontWeight:700}}>Have questions for us?</Typography>
      </Grid>
      <Grid xs={8}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
              <Grid item xs={12}>
                <Typography align="left">Email</Typography>
              </Grid>
              <Grid item>
                <TextField fullWidth />
              </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography align="left">Name</Typography>
            </Grid>
            <Grid item>
              <TextField fullWidth />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Fill in you question or inquiries"
              multiline rows={6} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained">
              <Typography>Send to CBR</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>  
    </Grid>
  </>
}