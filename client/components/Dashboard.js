import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

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
    rendering = false;
    rendering = true;
  }, [candcontrib]);

  const fixedWidthPaper = clsx(classes.paper, classes.fixedWidth);

  const candInfoClass = clsx(classes.paper, classes.fixedWidth, classes.marginBottom)

  const graphClass = clsx(classes.paper, classes.fixedWidth, classes.marginBottom)



  return (


      <Grid className={classes.content}><CssBaseline />
        {/* <div className={classes.appBarSpacer} /> */}
        <SearchBar width="600px" />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} style={{ display: "flex", flexWrap: 'wrap', justifyContent: 'space-around', flexDirection: "column"}}>

            {/* // Legislator info */}
            <Grid>
              <Paper className={candInfoClass} >
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
            <Grid>
              <Paper className={graphClass}>
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
            {/* Contributor Info */}
            <Grid>
              <Paper className={fixedWidthPaper}>
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
          </Grid>
        </Container>
          <Box pt={4}>
            <Copyright />
          </Box>
      </Grid>

  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  container: {
    paddingTop: 50,
    paddingBottom: 70,
  },
  content: {
    display : 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
    height: "220vh"
  },
  // //These classes are used for the containers
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
  },
  fixedWidth: {
    width: "90vw",
  },
  marginBottom: {
    marginBottom: "40px"
  },
}));
