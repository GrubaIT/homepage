import React from "react";
import Grommet from "grommet/components/Grommet";

import Footer from './Sections/Footer/Footer';
import Welcome from "./Sections/Welcome/Welcome";
import Mission from "./Sections/Mission/Mission";
import Problem from "./Sections/Problem/Problem";
import Solution from "./Sections/Solution/Solution";
import Team from "./Sections/Team/Team";
import Supporters from "./Sections/Supporters/Supporters";
import Friends from "./Sections/Friends/Friends";
import Contact from "./Sections/Contact/Contact";



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
