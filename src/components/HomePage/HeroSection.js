import React from 'react'
import { Button, Grid, Typography } from '@mui/material'

export default function HeroSection() {
  return <Grid container alignItems={"center"} justifyContent="space-around" style={{marginTop: 64}}>
    <Grid item xs ={5}>
      <Grid container spacing={3} justifyContent={"flex-start"}>
        <Grid item>
        <Typography style={{fontSize:32, fontWeight:700}}>
          SACPAS Fish Model
        </Typography>
        </Grid>
        <Grid item>
          <Typography align="left">
            Fish model is adwfg eshrd awdfg hdfj afes grht fj afe sgrdh tfj afes grht fj awd fesg
            Fish model is adwfg eshrd awdfg hdfj afes grht fj afe sgrdh tfj afes grht fj awd fesg
            Fish model is adwfg eshrd awdfg hdfj afes grht fj afe sgrdh tfj afes grht fj awd fesg
            Fish model is adwfg eshrd awdfg hdfj afes grht fj afe sgrdh tfj afes grht fj awd fesg
            aeftsgrd
            FAGES
          </Typography>
        </Grid>
        <Grid item>
          <Button variant='contained'>
            <Typography>Run the model</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={6}>
      <div style={{
        width: "100%",
        height: "500px",
        backgroundImage: 'url("https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png")'
      }}>

      </div>
    </Grid>
  </Grid>
}