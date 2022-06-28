import { Grid, Typography } from '@mui/material'
import { MapContainer, TileLayer } from 'react-leaflet'
import React from 'react'
import 'leaflet/dist/leaflet.css';
import withLayout from '../../layout/withLayout'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

function GeographyPage() {
  return <>
    <Grid container>
      <Grid item xs={8}>
        <Typography align="left" style={{ color: "#000066", fontWeight: 700, fontSize: 20 }}>Fish Model: Schematic and Geography</Typography>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction={"column"}>
          <Grid item>
            <Typography align="right" style={{ color: "#000066", fontWeight: 700, fontSize: 14 }}>Map File</Typography>
          </Grid>
          <Grid item>
            <Typography align='right' variant='body2'>Download a ready KML file</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid container justifyContent={"center"}>
      <div style={{height:"90vh", width:"90%"}}>
        <MapContainer center={[51.505, -0.09]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Grid>
  </>
}

export default withLayout(GeographyPage)