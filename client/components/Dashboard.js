import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./DashboardListItems";
// import Chart from './Chart';
import Deposits from "./Deposits";
import Orders from "./Orders";

import { CandidateInfo } from "./CandidateInfo";
import ContributorList from "./ContributorList";

import SearchBar from "./SearchBar";
import GraphTest from "./GraphTest";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Webfluence
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const drawerWidth = 240;

export default function Dashboard() {
  const classes = useStyles();
  const candcontrib = useSelector((state) => state.candcontrib);

  let rendering = true;

  useEffect(() => {
    console.log("USE EFFECT RAN!!!!");
    rendering = false;
    rendering = true;
  }, [candcontrib]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (


      <Grid className={classes.content}><CssBaseline />
        {/* <div className={classes.appBarSpacer} /> */}
        <SearchBar width="400px" />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{ display: "flex", flexWrap: 'wrap'}}>

            {/* // Legislator info */}
            <Grid>
              <Paper className={fixedHeightPaper} style={{flexGrow: 1}}>
                {Object.keys(candcontrib).length > 0 ? (
                  <CandidateInfo />
                ) : (
                  <Typography>
                    {" "}
                    You need to make a selection to render the info
                  </Typography>
                )}
              </Paper>
            </Grid>

            {/* Contributor Info */}
            <Grid>
              <Paper className={fixedHeightPaper} style={{flexGrow: 1}}>
                {Object.keys(candcontrib).length > 0 ? (
                  <ContributorList />
                ) : (
                  <Typography>
                    {" "}
                    You need to make a selection to render the table
                  </Typography>
                )}
              </Paper>
            </Grid>

            {/* Graph */}
            <Grid>
              <Paper className={fixedHeightPaper} style={{flexGrow: 2}}>
                {Object.keys(candcontrib).length > 0 && rendering ? (
                  <GraphTest />
                ) : (
                  <Typography>
                    {" "}
                    You need to make a selection to render the graph
                  </Typography>
                )}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </Grid>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  content: {
    display : 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center'
  },
  // //These classes are used for the containers
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
  },
  fixedHeight: {
    height: 350,
  },
}));
