import React, {useState, useEffect} from "react";
import { Typography, Button, Grid, Paper, Divider, IconButton } from "@material-ui/core";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useBreakpoints } from "./hooks/useBreakpoints";

export default function Footer() {

  const breakpoint = useBreakpoints()
  const [matchs, setMatchs] = useState(window.matchMedia("(min-width: 768px)").matches)

  useEffect(() => {
    const handler = (e) => setMatchs( e.matches );
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }, []);


  return (
    <Grid style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Grid style={matchs ? {display: 'flex', justifyContent: 'space-between', width: '70%', alignItems: "baseline"} : {display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '70%', alignItems: "center"}}>
        <Grid style={matchs ? {display: 'flex', justifyContent: 'flex-start', alignItems: "baseline"} : {display: 'flex', justifyContent: 'center'}}>
          <Button href="/sources" style={style.button}> Sources </Button>
          <Button href="/features" style={style.button}>Features</Button>
          <Button href="/donate" style={style.button}>Donate</Button>
        </Grid>
        {matchs && (<Typography style={style.logo}>webfluence</Typography>) }
        <Grid style={matchs ? {display: 'flex', justifyContent: 'flex-end', alignItems: "baseline"} : {display: 'flex', justifyContent: 'center'}}>
          <Button href="/about" style={style.button}>About</Button>
          <Button href="/faq" style={style.button}>FAQs</Button>
          <Button href="/contact" style={style.button}>Contact</Button>
        </Grid>
      </Grid>

      <hr style={{color: 'black', width: '70%', zIndex: 1}}/>

      <Grid style={{}}>
        <IconButton href="https://www.github.com/webfluence/webfluence" target="_blank">
          <GitHubIcon style={{margin: 10}} />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="https://twitter.com/OpenSecretsDC">
          <TwitterIcon style={{margin: 10}} />
        </IconButton>
      </Grid>
      <Typography style={{marginBottom: 15, zIndex: 1}}>© 2021 Webfluence</Typography>
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
    fontFamily: ["Dosis", "sans-serif"],
    zIndex: 1,
  }
}
