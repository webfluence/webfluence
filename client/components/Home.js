import { Typography, Button, Grid, Paper, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import networkAnimation from "../../public/networkAnimation";
import { useBreakpoints } from "./hooks/useBreakpoints";

export const Home = (props) => {

  const breakpoint = useBreakpoints()

  const classes = useStyles();

  console.log(classes.infoBox)
  
  return (
    <Grid className={classes.body}>
      <Grid className={classes.topSection} style={breakpoint.isTabletFloor ? {padding: 0, justifyContent: "center"} : {padding: 40}}>
        {/* <h3>Welcome, {username}</h3> */}
        <Grid style={breakpoint.isTabletFloor ? {display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'} : {display: 'flex', flexDirection: 'column', flex: .5, justifyContent: 'space-evenly'}}>
          <Typography className={classes.logo} style={breakpoint.isTabletFloor ? {fontSize : '20vw'} : {fontSize : '10vw'}} >webfluence</Typography>
          <Grid>
          <Paper className={classes.infoBox} width={breakpoint.isTabletFloor ? "300px" : "600px"} >
          <Typography style={{fontSize: '16px', fontFamily: 'Oswald'}}>{"MONEY & POLITICS"}</Typography>
          <hr style={{color: 'black', width: '70%'}}/>
          <Typography style={{fontSize: '17px', marginTop: '10px', textAlign: 'center', color: 'gray'}}>Lobbyist, special interest groups and corporations wield great power over what laws are written, enacted, and enforced. Who are the major donors that are influencing your lawmakers?</Typography>
          <Typography style={{fontSize: '17px', marginBottom: '20px', color: 'gray'}}><br />Search for a legislator below and find out!</Typography>
          </Paper>
          </Grid>
          <SearchBar width={breakpoint.isTabletFloor ? "300px" : "600px"}/>
        </Grid>
        {/* <Lottie options={animationOptions} width={'45vw'} style={{flex: 1}}/> */}
        <Grid style={{flex: 1}}></Grid>
      </Grid>
      <Grid style={{position: "relative"}}>
        <Grid className={classes.buttonSection} style={breakpoint.isTabletFloor ? {padding: "20px", height: "100%", } : {padding: "80px", height: '70vh'}}>
          <img className={classes.networkImage} src="/network.svg" style={breakpoint.isTabletFloor ? {width: "90vw"} : {width: "40vw"}}/>
          <Typography style={{fontSize: `${breakpoint.isTabletFloor ? '18px' : '25px'}`, marginBottom: '50px', textAlign: "center", zIndex: "1", color: "gray"}}>
            Create an account to save views about legislators who are
            <br /> most important or of interest to you.
          </Typography>
          <Button className={classes.button} href='/signup'> Create an Account</Button>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

const useStyles = makeStyles(() => ({
  topSection: {
    backgroundImage: `url('/background.png')`,
    backgroundPosition: 'right top',
    backgroundSize: 'cover',
    display: 'flex', 
    height: '85vh',
    justifyContent: "center",
    
  },
  body: {
    backgroundColor: "#F2F2F2",
  },
  logo: {
    fontFamily: "Dosis",
    marginBottom: "20px",
    color: "white",
    fontSize: "10vw",
    textShadow: "2px 2px 2px darkgray",
    zIndex: "1",
    textStroke: "1.5px black",
    letterSpacing: "0px",
  },
  section: {
    fontFamily: "Roboto",
    padding: "40px",
    fontSize: "30px",
  },
  buttonSection: {
    fontFamily: "Roboto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  button: {
    fontFamily: "Roboto",
    backgroundColor: "#FF5A5A",
    color: "white",
    width: "250px",
    height: "70px",
    margin: "40",
    zIndex: "1",
  },
  infoBox: {
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    padding: "30px",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px 0px",
    marginBottom: "20px"
  },
  networkImage: {
    zIndex: 0,
    left: "50px",
    position: "absolute",
    filter: "invert(%100)",
  },
  typography: {
    textAlign: "center",
  }

}));

export default connect(mapState)(Home);
