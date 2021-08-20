import React from "react";
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
import GraphTest from "./GraphTest";
// import Chart from './Chart';
import Deposits from "./Deposits";
import Orders from "./Orders";
import { CandidateInfo } from "./CandidateInfo";
import ContributorList from "./ContributorList"
import SearchBar from "./SearchBar";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const drawerWidth = 240;

export default function Dashboard() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <SearchBar/>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} direction="row">
            <Grid>
              {/* Chart */}
              <Grid>
                <Paper className={fixedHeightPaper}>
                  <CandidateInfo />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid>
                <Paper className={fixedHeightPaper}>
                  <ContributorList />
                </Paper>
              </Grid>
              {/* Recent Orders */}
            </Grid>
            <Grid>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                <GraphTest />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  // toolbar: {
  //   paddingRight: 24, // keep right padding when drawer closed
  // },
  // toolbarIcon: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "flex-end",
  //   padding: "0 8px",
  //   ...theme.mixins.toolbar,
  // },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  // },
  // menuButton: {
  //   marginRight: 36,
  // },
  // menuButtonHidden: {
  //   display: "none",
  // },
  // title: {
  //   flexGrow: 1,
  // },
  // appBarSpacer: theme.mixins.toolbar,
  // content: {
  //   flexGrow: 1,
  //   height: "100vh",
  //   overflow: "auto",
  // },
  container: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },

  // //These classes are used for the containers
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
  },
  fixedHeight: {
    height: 240,
  },
}));
