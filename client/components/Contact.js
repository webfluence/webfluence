import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

export const Contact = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />
      <Footer />
    </div>
  );
}
