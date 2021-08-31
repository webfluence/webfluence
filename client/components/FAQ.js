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

export default function Faq(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <div className={classes.container}>
          <h1>FAQ</h1>
        </div>
      </div>
      <Footer className={classes.footer} />
    </div>
  );
}
