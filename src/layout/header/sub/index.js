import React, { useState, useEffect} from "react";
import {Grid, Typography} from '@mui/material'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const HeadLink = [
  {
    name: "Main",
    link:"/"
  },
  {
    name: "Fish Model",
    link: "/fishmodel"
  },
  {
    name: "All Models",
    link: "/model"
  },
  {
    name: "Geography",
    link: "/geography"
  },
  {
    name: "References and Notes",
    link: "/refs"
  },
  {
    name: "Patchnotes",
    link: "/patchnote"
  }
]

function NavBarItem({item}) {
  const location = useLocation();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (location.pathname === item.link)
      setSelected(true)
  }, [location, item]);

  return <>
    <Grid item xs={2} style={{
      padding: "2px 24px",
      border: "1px solid #446475",
      background: selected ? "#ece2bc" :"#bcb18b" ,
      backgroundImage: selected ? "linear-gradient(to bottom, #ffffff 0, #ece2bc 100%)"
        : "linear-gradient(to bottom, #ece2bc 0, #bcb18b 100%)",
    }}
    >
      <Link to={item?.link} style={{textDecoration:"none"}}>
        <Typography style={{ color: "#00106C", fontWeight:700, fontSize:"12px" }}>{item?.name}</Typography>
      </Link>
    </Grid>
  </>
}

export default function SubHeader() {
  return (
    <>
      <Grid container>
        {HeadLink.map((e, i) => <NavBarItem key={i} item={e} />)}
      </Grid>
    </>
  )
}