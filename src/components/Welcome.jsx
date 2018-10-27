import React from "react";
import background from "../images/background.svg";
import gruba from "../images/logo.svg";
import ScrollDown from './ScrollDown';
import welcomeTranslations from '../translations/welcome.json'
import translateComponent from "./TranslateComponent";
import { withLocalize, Translate } from 'react-localize-redux';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logoScaledOut: false,
      cursorHidden: false
    };
  }

  componentDidMount() {
    this.pulsingLogoInterval = setInterval(
      () => this.setState({ logoScaledOut: !this.state.logoScaledOut }),
      1000
    );
    this.blinkingCursor = setInterval(
      () => this.setState({ cursorHidden: !this.state.cursorHidden }),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this.pulsingLogoInterval);
    clearInterval(this.blinkingCursor);
  }

  render() {
    const {translate} = this.props;
    return (
      
      <section id="landing-welcome-cover">
        <div className="background" />
        <div className="console">
          <h1>
            <span className="grayed-out">grubait@katowice:~$ echo '</span>
            {translate('welcome.welcomeText')}
            <span className="grayed-out">'</span>
            <span
              className={`${this.state.cursorHidden ? "hidden" : ""} cursor`}
            />
          </h1>
        </div>
        <div className="thumbnail">
          <img
            src={gruba}
            className={this.state.logoScaledOut ? "scaled-out" : ""}
          />
        </div>
      </section>
    );
  }
}

export default withLocalize(translateComponent(Welcome, welcomeTranslations));
