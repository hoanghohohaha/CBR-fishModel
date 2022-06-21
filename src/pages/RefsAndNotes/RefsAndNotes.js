import { Grid, Typography } from '@mui/material'
import React from 'react'
import withLayout from '../../layout/withLayout'
import EggCompare from '../../static/image/EggGrowthCompare.png'

function RefsAndNotes() {
  return (
    <>
      <Grid container style={{padding:"18px", borderBottom:"1px solid black"}}>
        <Typography style={{color:"#000066", fontWeight:700, fontSize: 20}}>References and Notes for Spawning to Migration modeling</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>Data Disclaimer</Typography>
      </Grid>
      <Grid container style={{ padding: " 0 0 0 32px" }}>
       <Typography align='left' variant='body1'>Redd and Carcass database provided as a courtesy by CDFW and USBR. These data are provisional. Subsequent review may result in significant revisions. These data are furnished with the understanding that the California Department of Fish and Wildlife (CDFW) makes no warranties concerning the accuracy, reliability, or suitability for any particular purpose. The datasets were not designed for this type of use. The aerial redd dataset in particular is limited due to is susceptibility to turbid water and other environmental characteristics that can make viewing the redd locations difficult to impossible. It is important to understand these limitations when used in this modeling application.</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>Redds and Carcasses Data Smoothing</Typography>
      </Grid>
      <Grid container style={{ padding: " 0 0 0 32px" }}>
        <Typography align='left' variant='body1'>Smoothing attempts to allocate the redds or carcasses more realistically in time. Since redds and carcasses are surveyed intermittently, the true timing of these events is lost. This process distributes any non-zero count of redds on a particular day back in time uniformly to the previous non-zero count day. The first day with non-zero counts is distributed back in time 6 days.</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>NOAA CV-Temp Temperature Forecast</Typography>
      </Grid>
      <Grid container style={{ padding: " 0 0 0 32px" }}>
        <Typography align='left' variant='body1'>Under specific user selections for <b>Fish Model: Spawning to Migration</b>, the program includes the <b>CV-Temp model</b> output for predicted Daily Average Temperature.
          For more information, please refer to <a href='http://oceanview.pfeg.noaa.gov/CVTEMP/' class='external' target='new'>Central Valley Temperature Mapping and Prediction (CVTEMP)</a>.</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>10 Year average metrics for missing values</Typography>
      </Grid>
      <Grid container style={{ padding: " 0 0 0 32px" }}>
        <Typography align='left' variant='body1'>When temperature data are un-available for specific days, a 10 year average is used to supply the missing values. If data type is "Daily Average" it is the 10 day average of the values for that day. If data type is "7DADM", it is the 10 day average of the daily maximum values (not the daily 7DADM).</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>References</Typography>
      </Grid>
      <Grid container style={{ padding: "18px 0 18px 16px" }}>
        <Typography style={{ color: "#000066", fontWeight: 700, fontSize: 16 }}>Egg Growth Model Comparison</Typography>
      </Grid>
      <Grid container>
        <img src={EggCompare} alt="EggComparingImage"/>
      </Grid>
    </>
  )
}

export default withLayout(RefsAndNotes)