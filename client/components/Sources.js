import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";


export default function Sources(props){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />
      <div className={classes.container}>
        <div className={classes.sources}>
          <h1>Sources</h1>
          <p>
            The following sources were used to create this website.
          </p>
          <ul>
            <li>
              <a href="https://www.opensecrets.org/">Open Secrets</a>
              <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/legalcode">Open Secrets Creative Commons License</a>
            </li>
            <li>
              <a href="https://projects.propublica.org/api-docs/congress-api">Propublica</a>
            </li>
            </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
