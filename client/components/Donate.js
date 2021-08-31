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
    paddingBottom: "60vh",
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
  },
}));

export default function Donate(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <h1>Donations</h1>
        <p>Heres a link to our venmos ;)</p>
      </div>
      <div></div>
      <Footer className={classes.footer} />
    </div>
  );
}
