import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";

/**
 * COMPONENT
 */
export const Home = (props) => {
  // const { username } = props;
  const classes = useStyles()
  return (
    <Grid className={classes.body}>
      <Grid className={classes.topSection}>
        {/* <h3>Welcome, {username}</h3> */}
          <Typography className={classes.logo}>webfluence</Typography>
        <SearchBar />
      </Grid>
      <Grid>
        <Grid className={classes.section}>
          <Typography>Who is influencing who?</Typography>
          <Typography>...and who is influencing the issues most important to you?</Typography>
        </Grid>
        <Grid className={classes.buttonSection}>
          <Typography>Create an account to save views about legislators who are<br /> most important or of interest to you.</Typography>
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
  padding: 40
},
body: {
  backgroundColor: '#F2F2F2'
},
logo: {
  fontFamily: "Dosis",
  color: "white",
  fontSize: "96px",
  textShadow: "2px 2px 2px darkgray",
  zIndex: "1",
  textStroke: "1.5px black",
  letterSpacing: "0px"
},
section: {
  fontFamily: "Roboto",
  padding: '40px'
},
buttonSection: {
  fontFamily: "Roboto",
  padding: '80px',
  display: 'flex',
  alignItems: "center",
  flexDirection: 'column'
},
button: {
  fontFamily: "Roboto",
  backgroundColor: '#f44336',
  color: 'white',
  width: "200px",
  margin: 40
}
}))

export default connect(mapState)(Home);
