import { Typography, Button, Grid, Paper, Divider } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import networkAnimation from "../../public/networkAnimation";
import { useBreakpoints } from "./hooks/useBreakpoints";

export const Home = (props) => {
  const breakpoint = useBreakpoints();

  const classes = useStyles();

  return (
    <Grid className={classes.body}>
      <Grid
        className={classes.topSection}
        style={
          breakpoint.isTabletFloor
            ? { padding: 0, justifyContent: "center" }
            : { padding: 40, backgroundImage: `url('/background.png')` }
        }
      >
        {/* <h3>Welcome, {username}</h3> */}
        <Grid
          style={
            breakpoint.isTabletFloor
              ? {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  flex: 0.5,
                  justifyContent: "space-evenly",
                }
          }
        >
          <Typography
            className={classes.logo}
            style={
              breakpoint.isTabletFloor
                ? { fontSize: "20vw" }
                : { fontSize: "10vw" }
            }
          >
            webfluence
          </Typography>
          <Grid>
            <Paper
              className={classes.infoBox}
              width={breakpoint.isTabletFloor ? "300px" : "600px"}
            >
              <Typography style={{ fontSize: "16px", fontFamily: "Oswald" }}>
                {"EVER WONDERED WHERE LEGISLATORS GET THEIR MONEY FROM?"}
              </Typography>
              <hr style={{ color: "black", width: "70%" }} />
              {/* <Typography style={{fontSize: `${breakpoint.isTabletFloor ? '16px': '17px'}`, marginTop: '10px', textAlign: 'center', color: 'gray'}}>In 1972, Richard Nixon paid five men to break into the Watergate complex using some of the $2 million that the dairy lobby had given him in secret cash in exchange for a promise to increase milk subsidies. Thus began Congress's decades-long series of laws meant to put an end to those kinds of arrangements and bring campaign financing into the daylight. And while explicit quid pro quos like that are now illegal, it remains true that politicians tend to align with their donors ideologically. So even as the Supreme Court has routinely limited Congress's ability to regulate money in politics, the public disclosure of campaign donations is an irreplaceable resource. <br /> <br /> Who are the major donors tied to your lawmakers?</Typography> */}
              <Typography
                style={{
                  fontSize: `${breakpoint.isTabletFloor ? "16px" : "17px"}`,
                  marginBottom: "20px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                <br />
                Search for a legislator below to show you a network of
                connections based on contributions!
              </Typography>
            </Paper>
          </Grid>
          <SearchBar width={breakpoint.isTabletFloor ? "300px" : "600px"} />
        </Grid>
        {/* <Lottie options={animationOptions} width={'45vw'} style={{flex: 1}}/> */}
        <Grid style={{ flex: 1 }}></Grid>
      </Grid>
      <Grid style={{ position: "relative" }}>
        <Grid
          className={classes.buttonSection}
          style={
            breakpoint.isTabletFloor
              ? { padding: "20px", height: "100%" }
              : { padding: "80px", height: "70vh" }
          }
        >
          {/* <img className={classes.networkImage} src="/network.svg" style={breakpoint.isTabletFloor ? {width: "90vw", top: "10px"} : {width: "60vw", top: "9px"}}/> */}
          <Grid>
            {/* <img src='/capitol building.jpeg' style={{width: "100%"}}/> */}
            <Paper
              className={classes.infoBox}
              width={breakpoint.isTabletFloor ? "300px" : "600px"}
            >
              <Typography style={{ fontSize: "16px", fontFamily: "Oswald" }}>
                {"A VERY BRIEF HISTORY OF MODERN CAMPAIGN FINANCE"}
              </Typography>
              <hr style={{ color: "black", width: "70%" }} />
              <Typography
                style={{
                  fontSize: `${breakpoint.isTabletFloor ? "16px" : "17px"}`,
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                In 1972, Richard Nixon paid five men to break into the Watergate
                complex using some of the $2 million that the dairy lobby had
                given him in secret cash in exchange for a promise to increase
                milk subsidies. Thus began Congress's decades-long series of
                laws meant to put an end to those kinds of arrangements and
                bring campaign financing into the daylight. And while explicit
                quid pro quos like that are now illegal, it remains true that
                politicians tend to align with their donors ideologically. So
                even as the Supreme Court has routinely limited Congress's
                ability to regulate money in politics, the public disclosure of
                campaign donations is an irreplaceable resource. <br /> <br />{" "}
                Who are the major donors tied to your lawmakers?
              </Typography>
              {/* <Typography style={{fontSize: `${breakpoint.isTabletFloor ? '16px': '17px'}`, marginBottom: '20px', textAlign: 'center', color: 'gray'}}><br />Search for a legislator below and find out!</Typography> */}
            </Paper>
          </Grid>
          {/* <Typography style={{fontSize: `${breakpoint.isTabletFloor ? '16px' : '25px'}`, marginBottom: '50px', textAlign: "center", zIndex: "1", color: "gray"}}>
            Create an account to save views about legislators who are most important to you.
          </Typography>
          <Button className={classes.button} href='/signup'> Create an Account</Button> */}
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
    // backgroundImage: `url('/background.png')`,
    backgroundPosition: "right top",
    backgroundSize: "cover",
    display: "flex",
    height: "85vh",
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
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px 0px",
    marginBottom: "20px",
    zIndex: 9999,
  },
  networkImage: {
    zIndex: 0,
    left: "50px",
    position: "absolute",
    filter: "invert(%100)",
  },
  typography: {
    textAlign: "center",
  },
}));

export default connect(mapState)(Home);
