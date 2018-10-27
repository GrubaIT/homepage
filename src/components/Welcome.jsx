import React from "react";
import gruba from "../images/logo.svg";

export default class Welcome extends React.Component {
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
    return (
      <section id="landing-welcome-cover">
        <div className="background" />
        <div className="console">
          <h1>
            <span className="grayed-out">grubait@katowice:~$ echo '</span>Kolejno
            dupno rzecz je tukej
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
