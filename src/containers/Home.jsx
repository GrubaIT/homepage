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
import MenuWrapped from "../components/MenuWrapped";

class App extends React.Component {
  render() {
    return (
      <MenuWrapped>
        <Welcome />
        <Grommet className="content-wrapper">
          <OurEvents />
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Supporters />
          <Friends />
          <Contact />
          <Footer />
        </Grommet>
      </MenuWrapped>
    );
  }
}
export default hot(module)(App);