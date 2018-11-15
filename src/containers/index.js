import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import favicon from "../images/favicon.png";
import Home from "./Home";
import Contest from "./Contest";
import NoMatch from "./404.jsx";
import Meetjs33 from "./Meetjs33";
import FourDev from './FourDev';
import Gallery from "./Gallery";
import FriendEvents from "./FriendEvents";

const Routes = () => (
  <div className="app-container">
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/zadanie" component={Contest} />
        <Route path="/meetjs33" component={Meetjs33} />
        <Route path="/4dev" component={FourDev} />
        <Route path="/galeria" component={Gallery} />
        <Route path="/kamraci" component={FriendEvents} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </div>
);

export default hot(module)(Routes);
