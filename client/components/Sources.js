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
    paddingBottom: "40vh",
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
          <p style={{textAlign: 'center', padding: 40}}>
            All data on our website has been made available through{" "}
            <a href="https://www.opensecrets.org/">Open Secrets</a>' public API
            and bulk data, made available under the{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode">
              Open Secrets Creative Commons License
            </a>.
          </p>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}
