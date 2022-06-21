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

const versionControlTest = [
  {
    version: "test",
    date:"today",
    tags: ["bugs", "fixed", "new feature"],
    details: ["detail 1", "detail 2", "detail 3"]
  },
  
  {
    version: "2.1",
    date: "N/A",
    tags: ["bugs", "fixed", "new feature"],
    details: ["Options for redd dewatering.", "Options for NOAA temperature forecasts."]
  }
]


function VersionRelease({data}) {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent style={{ display: "none" }}>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            {data.mark}
          </TimelineDot>
          <TimelineConnector color="secondary"/>
        </TimelineSeparator>
        <TimelineContent>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              <Typography style={{fontWeight:700, fontSize: 20}}>Version {data?.version}</Typography>
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
                <Grid container style={{ marginTop: 8 }}>
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
      <Timeline>
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