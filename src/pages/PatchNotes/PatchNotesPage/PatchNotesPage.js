import React from 'react'
import withLayout from '../../../layout/withLayout'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import { Grid, Typography } from '@mui/material';
import versionControlConfig from '../../../config/version';

function VersionRelease({data}) {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent style={{ display: "none" }}>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{backgroundColor:"white", border: "4px solid #000066"}}>
            {data.mark}
          </TimelineDot>
          <TimelineConnector color="secondary"/>
        </TimelineSeparator>
        <TimelineContent>
          <Grid container justifyContent={"space-between"} style={{marginTop: 10}}>
            <Grid item>
              <Typography style={{fontWeight:700, fontSize: 16, color:"#000066"}}>{data?.version}</Typography>
            </Grid>
            <Grid item>
              <Typography style={{fontSize:14}}>{data?.date}</Typography>
            </Grid>
          </Grid>
          <Grid container style={{marginTop: 8}}>
          {
            data?.tags && data?.tags.map((e, i) => {
              return <>
                <Grid item key={i} style={{border: "1px solid black", borderRadius: 10, padding:"2px 8px", marginLeft: 4}}>
                  <Typography style={{fontSize:11}}>{e}</Typography>  
                </Grid>
              </>
            })
          }
          </Grid>
          <Grid container style={{marginLeft: "16px"}}>
            {data?.details.map((e, i) => {
              return <>
                <Grid container key={i} style={{ marginTop: 8 }}>
                  <Typography style={{fontSize:14}} key={i}>● {e}</Typography>
                </Grid>
              </>
            })}
          </Grid>
        </TimelineContent>
      </TimelineItem>
    </>
  )
}

function PatchNotesPage() {
  return (
    <div>
      <Grid container style={{borderBottom: "1px solid black"}}>
        <Typography align="left" style={{ color: "#000066", fontWeight: 700, fontSize: 20, margin: 8 }}>
          Patch Notes
        </Typography>
      </Grid>
      <Timeline style={{marginTop: 12}}>
        {
          versionControlConfig.map((e, i) => {
            return <VersionRelease key={i} data={e}/>
          })
        }
      </Timeline>
    </div>
  )
}

export default withLayout(PatchNotesPage);