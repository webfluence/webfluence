import React from "react";
import { Typography, Button, Grid, Paper, Divider, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { makeStyles } from "@material-ui/core/styles";


export default function Footer() {
  return (
    <Grid style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Grid style={{display: 'flex', justifyContent: 'space-between', width: '70%', alignItems: "baseline"}}>
        <Grid style={{display: 'flex', justifyContent: 'flex-start', alignItems: "baseline"}}>
          <Button href="#text-buttons" style={style.button}> Sources </Button>
          <Button href="#text-buttons" style={style.button}>Features</Button>
          <Button href="#text-buttons" style={style.button}>Donate</Button>
        </Grid>
        <Typography style={style.logo}>webfluence</Typography>
        <Grid style={{display: 'flex', justifyContent: 'flex-end', alignItems: "baseline"}}>
          <Button href="#text-buttons" style={style.button}>About</Button>
          <Button href="#text-buttons" style={style.button}>FAQs</Button>
          <Button href="#text-buttons" style={style.button}>Contact</Button>
        </Grid>
      </Grid>
      
      <hr style={{color: 'black', width: '70%'}}/>
      <Grid style={{}}>
        <IconButton href="https://www.github.com/webfluence/webfluence" target="_blank">
          <GitHubIcon style={{margin: 10}} />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank">
          <TwitterIcon style={{margin: 10}} />
        </IconButton>
      </Grid>
      <Typography style={{marginBottom: 15}}>© 2021 Webfluence</Typography>
    </Grid>
  )
}

const style = {
  button: {
    color: "black"
  },
  logo : {
    alignItems: "baseline",
    marginBottom : "0px",
    fontSize: 32,
    fontFamily: ["Dosis", "sans-serif"]
  }
}