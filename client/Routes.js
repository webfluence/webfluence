import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Graph from "./components/Graph";
import { me } from "./store";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Sources from "./components/Sources";
import Features from "./components/Features";
import Donate from "./components/Donate";
import About from "./components/About";
import Faq from "./components/FAQ";
import Contact from "./components/Contact";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" exact component={Home} />
            {/* <Redirect to="/home" /> */}
            <Route path="/graph" component={Graph} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/sources" component={Sources} />
            <Route path="/features" component={Features} />
            <Route path="/donate" component={Donate} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/searchbar" component={SearchBar} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/graph" component={Graph} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/sources" component={Sources} />
            <Route path="/features" component={Features} />
            <Route path="/donate" component={Donate} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route path="/contact" component={Contact} />
            <Route path="/searchbar" component={SearchBar} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
