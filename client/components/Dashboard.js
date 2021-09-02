import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import clsx from "clsx";
import {
  makeStyles,
  Typography,
  CssBaseline,
  Button,
  Box,
  List,
  Divider,
  IconButton,
  Container,
  Grid,
  Paper,
  Link,
  Avatar,
  Tooltip,
  Fab
} from "@material-ui/core";
import { useBreakpoints } from "./hooks/useBreakpoints";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

import { CandidateInfo } from "./CandidateInfo";
import ContributorList from "./ContributorList";
import Footer from "./Footer";
//
import SearchBar from "./SearchBar";
import Graph from "./Graph";
import InfoDialogMUI from "./InfoDialogMUI";

import { isLoading } from "../store/loading";
import { ClipLoader } from "react-spinners";
import { minHeight } from "@material-ui/system";
import { isFullscreenThunk } from "../store/fullscreen";

import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";

export default function Dashboard() {
  const classes = useStyles();
  const candcontrib = useSelector((state) => state.candcontrib);
  const loading = useSelector((state) => state.loading);

  const fullscreen = useSelector((state) => state.fullscreen);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLoading(false));
  }, [candcontrib]);

  const handle = useFullScreenHandle();

  useEffect(() => {
    if (fullscreen) {
      handle.enter();
    }
    if (!fullscreen && handle.active) {
      handle.exit();
    }

    // fullscreen && handle.active ? handle.enter() : handle.exit()
    // dispatch(isFullscreenThunk(false))
  }, [fullscreen]);

  const paperClass = clsx(classes.paper, classes.margins);

  const mobileClass = clsx(classes.paper, classes.margins, classes.mobileWidth);

  const breakpoint = useBreakpoints();

  // set is full screen state to true or false

  const [open, setOpen] = useState(false);

  // State for react-joyride tutorial
  const [run, setRun] = useState(window.localStorage.getItem('runtutorial') ? false : true);
  const [stepIndex, setStepIndex] = useState(0);

  const [steps, setSteps] = useState([
    {
      content: (
        <p>
          Follow along to learn how to use the network graph and understand the data.
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "center",
      target: ".search",
    },
    {
      content: (
        <p>
          Begin by searching any current member of congress. Try one from your
          state by typing in the state abbreviation (i.e. "NY").{" "}
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".search",
    },
    {
      content: (
        <p>
          When you have selected a legislator, you will see basic information
          about them populate in the top panel.{" "}
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".legislatorInfo",
    },
    {
      content: (
        <p>
          In the center panel, you can manipulate and explore the network graph
          that displays the selected legislator and their top 10 donor
          organizations for their most recent campaign for office.{" "}
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".graph",
    },
    {
      content: (
        <p>
          Use these tools to enter fullscreen mode, branch the nodes, zoom, pan,
          and see the key. You can also navigate the graph with your arrow keys
          and the plus and minus buttons on your keyboard.
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".tools",
    },
    {
      content: (
        <p>
          This table displays the top contributors to the selected candidate for
          a House or Senate seat or member of Congress. These are 6 year numbers
          for Senators/Senate candidates; 2 years for Representatives/House
          candidates
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".contributorInfo",
    },
    {
      content: (
        <p>
          Click into any of the column titles to learn more about that category.
        </p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".tableColumnHeader",
    },
    {
      content: (
        <p>Click into a table row to learn more about the organization.</p>
      ),
      locale: { skip: <strong aria-label="skip">Skip</strong> },
      placement: "auto",
      target: ".tableRow",
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  console.log(steps);

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;

    window.localStorage.setItem('runtutorial', false)
    console.log('HANDLE JOY RIDE CALLBACK RUNNING')

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));

    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setRun(false);
    }

    console.groupCollapsed(type);
    console.log(data); //eslint-disable-line no-console
    console.groupEnd();
  };

  return (
    <Fragment>
      <div>
        <Joyride
          callback={handleJoyrideCallback}
          run={run}
          stepIndex={stepIndex}
          steps={steps}
          continuous={true}
          showProgress={true}
          showSkipButton={true}
          styles={{
            options: {
              arrowColor: "#364aff",
              backgroundColor: "#ffffff",
              overlayColor: "rgba(0, 0, 0, 0.2)",
              primaryColor: "#364aff",
              textColor: "black",
              // width: 900,
              zIndex: 1000,
            },
          }}
        />
      </div>
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
                <div className="legislatorInfo">
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
                </div>
              </Grid>

              <div className="graph">
                <Grid style={{ position: "relative" }}>
                  <Paper
                    className={
                      breakpoint.isTabletFloor ? mobileClass : paperClass
                    }
                    style={{ minHeight: "400px" }}
                  >
                    {Object.keys(candcontrib).length > 0 && !loading ? (
                      <FullScreen
                        className="fullscreen-enabled"
                        handle={handle}
                      >
                        <InfoDialogMUI style={{ zIndex: 9999 }} />
                        <Graph />
                      </FullScreen>
                    ) : (
                      <ClipLoader
                        color={"darkgray"}
                        loading={loading}
                        size={200}
                      />
                    )}
                  </Paper>
                  {/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
                </Grid>
              </div>
              {/* Contributor Info */}
              <div className="contributorInfo">
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
              </div>
            </Grid>
          </Container>
        </Grid>
        <Fab color="primary" aria-label="add" style={{position: "fixed", bottom: 15,
  right: 15}} onClick={()=>{
      setRun(false)
      setRun(true)
      setStepIndex(0)}} >
          <HelpOutlineIcon />
        </Fab>
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
