import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "40vh",
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
}));

export default function Features(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1>Features and Modules</h1>
          <p>
            Our website currently uses the following technologies to make
            everything come together
          </p>
          <ul className={classes.list}>
            <li>
              <a href="https://material-ui.com/">Material-UI</a>
            </li>
            <li>
              <a href="https://visjs.org/">Vis.js</a>
            </li>
            <li>
              <a href="https://www.postgresql.org/">PostgreSQL</a>
            </li>
            <li>
              <a href="hhttps://nodejs.org/en/">Node.js</a>
            </li>
            <li>
              <a href="https://reactjs.org/">React</a>
              <ul>
                <li>
                  <a href="https://www.npmjs.com/package/react-toastify">
                    React-Toastify
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/react-lottie">
                    React-Lottie
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/react-modal">
                    React-Modal
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/react-responsive">
                    React-Responsive
                  </a>
                </li>
                <li>
                  <a href="https://www.npmjs.com/package/react-toastify">
                    React-Spinners
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}
