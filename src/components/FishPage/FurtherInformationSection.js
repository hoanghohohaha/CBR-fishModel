import { Grid, Typography } from "@mui/material";
import React from "react";
import { informationFurther } from "../../config/furtherInfo";

function FurtherInformationLink({ bold, content, link }) {
  return <>
    <Grid item style={{marginTop: 6}}>
      <a href={link}>
        <Typography variant="body2" style={{fontWeight: !bold ? 400: 700, color:"blue"}}>{content}</Typography>
      </a>
    </Grid>
  </>
}

export default function FurtherInformationSection() {
  return (
    <>
      <Grid container style={{marginTop: 24, marginBottom: 2}}>
        <Typography>---- Further information ----</Typography>
      </Grid>
      <Grid container style={{ marginBottom: 24 }} direction="column" alignContent={"flex-start"} alignItems="flex-start">
        {
          informationFurther.map((e, i) => (<FurtherInformationLink key={i} bold={e.bold} content={e.content} link={e.link} />))
         }
      </Grid>
    </>
  )
}