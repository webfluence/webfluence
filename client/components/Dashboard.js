import React, { Fragment, useEffect } from "react";
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
import Avatar from "@material-ui/core/Avatar";
import { useBreakpoints } from "./hooks/useBreakpoints";

import { CandidateInfo } from "./CandidateInfo";
import ContributorList from "./ContributorList";
import Footer from "./Footer";

import SearchBar from "./SearchBar";
import GraphTest from "./GraphTest";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Webfluence
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Dashboard() {
  const classes = useStyles();
  const candcontrib = useSelector((state) => state.candcontrib);

  let rendering = true;

  useEffect(() => {
    rendering = false;
    rendering = true;
  }, [candcontrib]);

  const paperClass = clsx(classes.paper, classes.margins);

  const mobileClass = clsx(classes.paper, classes.margins, classes.mobileWidth);

  const breakpoint = useBreakpoints();

  return (
    <Fragment>
      <Grid style={{ backgroundColor: "#e3e3e3" }}>
        <Grid className={classes.content}>
          <CssBaseline />
          {/* <div className={classes.appBarSpacer} /> */}
          <SearchBar width={breakpoint.isTabletFloor ? "300px" : "600px"} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid
              container
              spacing={3}
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                flexDirection: "column",
              }}
            >
              {/* // Legislator info */}
              <Grid style={{ alignItems: "center" }}>
                <Paper
                  className={
                    breakpoint.isTabletFloor ? mobileClass : paperClass
                  }
                >
                  {Object.keys(candcontrib).length > 0 ? (
                    <CandidateInfo />
                  ) : (
                    <Typography>
                      You need to make a selection to render the info
                    </Typography>
                  )}
                </Paper>
              </Grid>
              <Grid>
                <Paper
                  className={
                    breakpoint.isTabletFloor ? mobileClass : paperClass
                  }
                >
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
                <Paper
                  className={
                    breakpoint.isTabletFloor ? mobileClass : paperClass
                  }
                >
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
        </Grid>
        <Footer />
      </Grid>
    </Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: 50,
    paddingBottom: 70,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    alignItems: "center",
    // height: "220vh"
  },
  // //These classes are used for the containers
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "row",
  },
  margins: {
    marginBottom: "40px",
  },
  mobileWidth: {
    width: "90vw",
  },
}));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
