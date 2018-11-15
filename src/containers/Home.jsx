import React from "react";
import { hot } from 'react-hot-loader';
import Grommet from "grommet/components/Grommet";

import Footer from '../components/Footer';

import {
  Welcome,
  Mission,
  Problem,
  Solution,
  Team,
  OurEvents,
  Contact,
  Supporters,
  Friends
} from "../components";

class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome />
        <Grommet className="content-wrapper">
          <OurEvents />
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Supporters />
          <Friends />
        </Grommet>
      </div>
    );
  }
}
export default hot(module)(App);