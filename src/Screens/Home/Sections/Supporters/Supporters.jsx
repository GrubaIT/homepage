import React, { Component } from "react";
import Logos from '../../../../Common/Logos'
import futureProcessingLogo from "../../../../images/future-processing__logo-2017-white.png";
import katowiceLogo from "../../../../images/katowice_logo.png";
import softserve from '../../../../images/soft-serve.svg';
import isystems from '../../../../images/i-systems-logo.png';
import billennium from '../../../../images/logo_billennium-01.png';
import brainhub from '../../../../images/brainhub.svg';

class Supporters extends Component {
  render() {
    return <Logos logos={[
      { image: futureProcessingLogo, url: 'https://future-processing.pl/' },
      { image: katowiceLogo, url: 'http://miasto-ogrodow.eu/' },
      { image: softserve, url: 'https://softserveinc.com/en-us/' },
      { image: isystems, url: 'https://www.i-systems.pl/' },
      { image: billennium, url: 'https://billennium.pl/' },
      { image: brainhub, url: 'https://brainhub.eu/' }
    ]} title='Wspierają nas' backgroundColor='white'/>;
  }
}

export default Supporters;
