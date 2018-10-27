import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Paragraph from "grommet/components/Paragraph";
import Heading from "grommet/components/Heading";
import Grommet from "grommet/components/Grommet";
import Accordion from "grommet/components/Accordion";
import AccordionPanel from "grommet/components/AccordionPanel";
import Box from "grommet/components/Box";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Header from "grommet/components/Header";
import CheckmarkIcon from "grommet/components/icons/base/Checkmark";
import Countdown from "../../Common/Countdown";
import logo from "../../images/logo.svg";
import Footer from "../Home/Sections/Footer/Footer";

const SubpageSection = ({ headerUppercase, title, children }) => (
    <Box className="subpage__section">
      <Heading
        strong={true}
        uppercase={headerUppercase}
        align="start"
        margin="small"
      >
        {title}
      </Heading>
      <div className="subpage__section--content">{children}</div>
    </Box>
  );

class Meetjs33 extends Component {
    render() {
        return (
            <section className="subpage contest">
              <div className="subpage__header">
                <NavLink to="/" className="subpage__header--logo">
                  <img src={logo} />
                </NavLink>
                <Heading
                  className="subpage__header--title"
                  strong={true}
                  uppercase={true}
                  align="center"
                  margin="none"
                >
                  Materiały do prezentacji
                </Heading>
              </div>
              <Grommet className="content-wrapper">
                <SubpageSection headerUppercase={false} title="Jak uporządkować stan aplikacji i okiełznać jego asynchroniczność?">
                  <p>
                    Cześć! Mam nadzieję, że prezentacja <span className='italic'>"Jak uporządkować stan aplikacji i okiełznać jego asynchroniczność?"</span> podobała Ci się i dostarczyła inspiracji oraz wartości.
                  </p>
                  <p>Poniżej mam dla Ciebie kilka linków, które uzupełnią wiedzę, którą przekazałem na prezentacji. Jeśli masz jakieś pytania, pisz do mnie na maila <a href='mailto:jakub@gruba.it'>jakub@gruba.it</a></p>
                  <ul>
                      <li><a href='https://code.tutsplus.com/tutorials/getting-started-with-redux-why-redux--cms-30349'>Fajny tutek, który pozwoli Ci szybko zacząć z reduxem w react.js</a></li>
                      <li><a href='https://medium.com/dailyjs/using-redux-observable-to-handle-asynchronous-logic-in-redux-d49194742522'>Artykuł opisujący logikę asyncrhoniczną z użycie redux-observable</a></li>
                      <li><a href='https://shift.infinite.red/redux-observable-epics-vs-redux-sagas-8e53610c0eda'>Porównanie redux-observable i redux-saga</a></li>
                      <li><a href='https://www.youtube.com/watch?v=AslncyG8whg'>Zajebista prezentacja gościa z Netflixa, z której dowiedziałem się o redux-observable</a></li>
                      <li><a href='https://humanaction-my.sharepoint.com/:p:/g/personal/sikora_humanaction_eu/EYLYrlxoovJJvwb6VXX4w3gBv_Showr9XIJ1xLZjRbHDMQ?e=4SrXwd'>Moja prezentacja</a></li>
                  </ul>
                </SubpageSection>
                <Footer />
              </Grommet>
            </section>
          );
    }
}

export default Meetjs33;
