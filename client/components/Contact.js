import React from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";

const ContactForm = () => {}

export default function Contact(props)  {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SearchBar />
      <form>

      </form>
      <Footer />
    </div>
  );
}
