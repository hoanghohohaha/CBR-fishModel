import { Button, Checkbox, Collapse, Grid, Input, MenuItem, Radio, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FurtherInformationSection from "../../../components/FishPage/FurtherInformationSection";
import withLayout from "../../../layout/withLayout";

// Enum

const InputSetting = Object.freeze({
  Basic: 0,
  Immediate: 1,
  Full: 2,
})

function InputSettingModeHandler(inputState, setInputState, type) {
  // if (type === InputSetting.Full) {
  //   if (inputState !== InputSetting.Basic) {
  //     setInputState(InputSetting.Basic)
  //   } else {
  //     setInputState(type)
  //   }
  // } else {
  //   if (inputState === InputSetting.Immediate) {
      
  //   }
  // }
  switch (type) {
    case InputSetting.Full:
      if (inputState !== InputSetting.Full) {
        setInputState(type)
      } else {
        setInputState(InputSetting.Basic)
      }
      break;
    case InputSetting.Immediate:
      if (inputState !== InputSetting.Basic) {
        setInputState(InputSetting.Basic)
      } else {
        setInputState(type)
      }
      break;
    default:
      break;
  }
}

function FishModelPage() {
  const [inputState, setInputState] = useState(InputSetting.Basic);
  const [year, setYear] = useState(null);
  
  return (
    <>
      <Grid container>
        <Grid container>
          <Typography align="left" style={{ color: "#000066", fontWeight: 700, fontSize: 20 }}>
            SacPAS Fish Model v.2.7.4:   Egg to Fry (Spawning to Emergence) and In-river Migration
          </Typography>
        </Grid>

        {/* Sub navigation */}
        <Grid container style={{marginTop: 4}} justifyContent="flex-start" spacing={2}>
          <Grid item >
            <Button variant="contained">
              <Typography variant="body2">Tutorial</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained">
              <Typography variant="body2">Introduction</Typography>
            </Button>
          </Grid>
          <Grid item >
            <Button variant="contained">
              <Typography variant="body2">Overall Framework</Typography>
            </Button>
          </Grid>
          <Grid item >
            <Button variant="contained">
              <Typography variant="body2">Models Schematic</Typography>
            </Button>
          </Grid>
          <Grid item >
            <Button variant="contained">
              <Typography variant="body2">Map</Typography>
            </Button>
          </Grid>
        </Grid>

        {/* Content */}
        <Grid container justifyContent={"space-between"} style={{ marginTop: 24 }}>
          <Grid item xs={7} style={{paddingRight: 24}}>
            <Grid container>
              <Grid container justifyContent={"space-between"}>
                <Typography fullWidth>Input Settings</Typography>
                <Button>
                  <Typography variant="caption">Reset input</Typography>
                </Button>
              </Grid>
              <Typography variant="caption">Make your changes to run the model</Typography>

              {/* Main input section */}
              <Grid container alignItems={"center"} justifyContent="space-between" style={{ marginTop: 24}}>
                <Grid item xs={7}>
                  <Grid>
                    <Typography align="left" gutterBottom>Year selection</Typography>
                  </Grid>
                  <Grid>
                    <TextField
                      select
                      inputProps={{ min: 0, style: { textAlign: 'right', fontSize:"10px" } }}
                      defaultValue={"1"}
                      color="primary"
                      fullWidth
                      onChange={(e) => setYear(e.target.value)}
                    >
                      <MenuItem disabled value={"1"}>Please select a year to run the model</MenuItem>
                      <MenuItem value={2022}>2022</MenuItem>
                      <MenuItem value={2021}>2021</MenuItem>
                      <MenuItem value={2019}>2019</MenuItem>
                      <MenuItem value={2018}>2018</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              {year === 2022 && (<Grid>
                <Typography variant="h6" style={{ fontSize: 16, fontWeight: 700 }} color="error">WARNING: Missing data for current year, forecast mode enable</Typography>
              </Grid>)}

              {/* Immediate mode */}
              <Collapse style={{ width: "100%", marginTop: 12 }} in={inputState >= InputSetting.Immediate}>
                <Grid item xs={12}>
                  <Typography align="left" style={{ fontSize: 16 }} gutterBottom variant="h6">Temperature data input</Typography>
                </Grid>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="caption">Forecast with NOAA temp from </Typography>
                    <a href="https://oceanview.pfeg.noaa.gov/CVTEMP/river">
                      <Typography variant="caption">NOAA CVtemp</Typography>
                    </a>
                  </Grid>
                  <Grid item>
                    <TextField defaultValue={"USBR_NO_W2 25L3MTO"} disabled={year !== 2022} select size="small">
                      <MenuItem value={"USBR_NO_W2 25L3MTO"}>USBR_NO_W2 25L3MTO</MenuItem>
                      <MenuItem value={"NOAA_Leakage 25L3MTO"}>NOAA_Leakage 25L3MTO</MenuItem>
                    </TextField>
                  </Grid>
                </Grid>

                {/* Full Mode */}
                <Collapse style={{ width: "100%", marginTop: 12 }} in={inputState >= InputSetting.Full}>
                  <Grid container alignItems={"center"} justifyContent="space-between">
                    <Grid>
                      <Checkbox />
                      <Typography variant="caption">Use customize input or files</Typography>
                    </Grid>
                    <Grid>
                      <Button variant="outlined">
                        <Typography variant="caption">Upload Files</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                  <TextField fullWidth multiline rows={6} />
                </Collapse>
                
                {/* Immed */}
                <Typography align="left" style={{ fontSize: 16, marginTop: 12 }} gutterBottom variant="h6">Winter Redd Forecast Settings</Typography>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Typography variant="caption">Location</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField fullWidth defaultValue={1} select size="small">
                      <MenuItem value={2022}>NOAA 1</MenuItem>
                      <MenuItem value={1}>NOAA 2</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption"> of </Typography>
                  </Grid>
                  <Grid item>
                    <TextField defaultValue={"300"} size="small" />
                  </Grid>
                  <Grid item>
                    <Typography variant="caption"> redds</Typography>
                  </Grid>
                </Grid>
              </Collapse>

              {/* Full Mode */}
              <Collapse style={{ width: "100%", marginTop: 12 }} in={inputState >= InputSetting.Full}>
                <Grid container alignItems={"center"} justifyContent="space-between">
                  <Grid>
                    <Checkbox />
                    <Typography variant="caption">Use customize input or files</Typography>
                  </Grid>
                  <Grid>
                    <Button variant="outlined">
                      <Typography variant="caption">Upload Files</Typography>
                    </Button>
                  </Grid>
                </Grid>
                <TextField fullWidth multiline rows={3} />
              </Collapse>

              {/* Imme */}
              <Collapse style={{ width: "100%"}} in={inputState >= InputSetting.Immediate}>
                <Typography align="left" style={{ fontSize: 16, marginTop: 12 }} gutterBottom variant="h6">Survival: Redd to RBDD</Typography>
                <Grid container alignItems="center">
                  <Grid>
                    <Checkbox />
                    <Typography variant="caption">Temperature effect only for method</Typography>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid>
                      <Radio
                        size="small"
                      />
                      <Typography variant="caption">Stage-dependent mortality</Typography>
                    </Grid>
                  </Grid>
                  <Grid container alignItems="center">
                    <Grid>
                      <Radio
                        size="small"
                      />
                      <Typography variant="caption">Stage-independent mortality</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Collapse>

              <Collapse style={{ width: "100%" }} in={inputState >= InputSetting.Full}>
                <Typography align="left" style={{ fontSize: 16, marginTop: 12 }} gutterBottom variant="h6">Egg to emergence timing model</Typography>
                <Grid container alignItems="center">
                  <Grid item>
                    <Radio value="a" size="small"/>
                    <Typography variant="caption">Mechanistic (Beer and Anderson 1997): Egg mass</Typography>
                    <TextField size="small" />
                    <Typography variant="caption">mg</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center">
                  <Grid item>
                    <Radio value="a" size="small" />
                    <Typography variant="caption">Empirical (Jensen et al. 1999)</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center">
                  <Grid item>
                    <Radio value="a" size="small" />
                    <Typography variant="caption">Power law (Beacham/Murray 1990) Days = e10.404 - 2.043*log(T°C + 7.575)</Typography>
                  </Grid>
                </Grid>
                <Grid container alignItems="center">
                  <Grid item>
                    <Radio value="a" size="small" />
                    <Typography variant="caption">Linear (Zeug et al. 2012): Target ATUs</Typography>
                    <TextField size="small" />
                    <Typography variant="caption">degree C days.</Typography>
                  </Grid>
                </Grid>
              </Collapse>
              
              <Collapse style={{ width: "100%" }} in={inputState >= InputSetting.Full}>
                <Typography align="left" style={{ fontSize: 16, marginTop: 12 }} gutterBottom variant="h6">Additional inputs</Typography>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography variant="caption">Eggs per Redd </Typography>
                    <TextField size="small" />
                    <Typography variant="caption">Oppenheim (2014)</Typography>
                  </Grid>
                </Grid>
              </Collapse>

              {/* Setting control section */}
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <Button variant="text" style={{ padding: 8 }} onClick={() => { InputSettingModeHandler(inputState, setInputState, InputSetting.Immediate) }}>
                    <Typography variant="body2">{inputState >= InputSetting.Immediate ? "Close" : "Open"} immediate settings</Typography>
                  </Button>
                  <Button variant="text" style={{ padding: 8 }} onClick={() => {InputSettingModeHandler(inputState, setInputState, InputSetting.Full)}}>
                    <Typography variant="body2">{ inputState >= InputSetting.Full ? "Close" : "Open"} full settings</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <Typography variant="body2">Graphic Controls</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>


            {/* Run models section */}
            <Grid container spacing={1}>
              <Grid item>
                <Grid container direction="column">
                <Button variant="contained">
                  <Typography variant="body2">Run</Typography>
                </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="contained">
                  <Typography variant="body2">Send results to Delta</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">
                  <Typography variant="body2">Get query string</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Schenatic map stuff go here */}
          <Grid item xs={5}>
            <div style={{
              height: "400px", width: "100%",
              background:"black"
            }}>
              
            </div>
          </Grid>
        </Grid>

        {/*  Further information */}
        <FurtherInformationSection />

      </Grid>
    </>
  )
}

export default withLayout(FishModelPage)