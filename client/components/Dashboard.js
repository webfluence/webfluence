import React, { Fragment, useEffect, useLayoutEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
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

import { isLoading } from "../store/loading";
import { ClipLoader } from "react-spinners";
import { minHeight } from "@material-ui/system";

export default function Dashboard() {
  const classes = useStyles();
  const candcontrib = useSelector((state) => state.candcontrib);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(false))
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
                  style={{minHeight: "400px"}}
                >
                  {Object.keys(candcontrib).length > 0 && !loading ? (
                    <GraphTest/>
                  ) : (
                    <ClipLoader color={"darkgray"} loading={loading} size={200} />
                  )}
                </Paper>
                <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
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
    justifyContent: "center",
    alignItems: "center",
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
