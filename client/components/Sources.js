import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "50vh",
  },
  footer: {
    position: "center",
  },
}));

export default function Sources(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1>Sources</h1>
          <p>The following sources were used to create this website.</p>
          <ul>
            <li>
              <a href="https://www.opensecrets.org/">Open Secrets</a>
            </li>
            <li>
              <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode">
                Open Secrets Creative Commons License
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}
