import React from "react";
import Grommet from "grommet/components/Grommet";

import Footer from './Sections/Footer';
import Welcome from "./Sections/Welcome";
import Mission from "./Sections/Mission";
import Problem from "./Sections/Problem";
import Solution from "./Sections/Solution";
import Team from "./Sections/Team";
import Supporters from "./Sections/Supporters";
import Friends from "./Sections/Friends";
import Contact from "./Sections/Contact";



export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Welcome />
        <Grommet className="content-wrapper">
          <Mission />
          <Problem />
          <Solution />
          <Team />
          <Supporters />
          <Friends />
          <Contact />
          <Footer />
        </Grommet>
      </React.Fragment>
    );
  }
}
