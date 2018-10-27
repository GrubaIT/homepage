import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Contest from "./Screens/Contest/Contest";
import NoMatch from "./Screens/404/404.jsx";
import Meetjs33 from "./Screens/Metjs33/Meetjs33";

export default () => (
    <div className="app-container">
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/zadanie" component={Contest}/>
                <Route path="/meetjs33" component={Meetjs33}/>
                <Route component={NoMatch}/>
            </Switch>
        </Router>
    </div>
);
