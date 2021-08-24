import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import Lottie from "react-lottie";
import networkAnimation from "../../public/networkAnimation";
// import background from '../../public/background.png'


const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: networkAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

/**
 * COMPONENT
 */
export const Home = (props) => {
  // const { username } = props;
  const classes = useStyles();
  return (
    <Grid className={classes.body}>
      <Grid className={classes.topSection} style={{display: 'flex'}}>
        {/* <h3>Welcome, {username}</h3> */}
        <Grid style={{display: 'flex', flexDirection: 'column', flex: .5, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <Typography className={classes.logo}>webfluence</Typography>

          <SearchBar style={{marginBottom: "100px"}} />
        </Grid>
        {/* <Lottie options={animationOptions} width={'45vw'} style={{flex: 1}}/> */}
        <Grid style={{flex: 1}}></Grid>
      </Grid>
      <Grid stlye={{backgroundColor: 'blue', zIndex: 3}}>
        <Grid className={classes.buttonSection}>
          <Typography>
            Create an account to save views about legislators who are
            <br /> most important or of interest to you.
          </Typography>
          <Button className={classes.button}>Create an Account</Button>
        </Grid>
      </Grid>
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
    padding: 40,
    backgroundImage: `url('/background.png')`,
    backgroundSize: 'cover'
  },
  body: {
    backgroundColor: "#F2F2F2",
  },
  logo: {
    fontFamily: "Dosis",
marginTop: "50px",
    marginBottom: "50px",
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
    padding: "80px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: 'darkgray'
  },
  button: {
    fontFamily: "Roboto",
    backgroundColor: "#f44336",
    color: "white",
    width: "200px",
    margin: 40,
  },
}));

export default connect(mapState)(Home);
