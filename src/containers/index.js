import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LocalizeProvider } from "react-localize-redux";

import favicon from "../images/favicon.png";
import Home from "./Home";
import Contest from "./Contest";
import NoMatch from "./404.jsx";
import Meetjs33 from "./Meetjs33";
import FriendEvents from "./FriendEvents";


const Routes = () => (
  <div className="app-container">
  <LocalizeProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/zadanie" component={Contest} />
        <Route path="/meetjs33" component={Meetjs33} />
        <Route path="/kamraci" component={FriendEvents} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
    </LocalizeProvider>
  </div>
);

export default Routes;
