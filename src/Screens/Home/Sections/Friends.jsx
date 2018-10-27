import React, { Component } from "react";

import meetjs from './images/meetjs-logo-white-katowice.svg'
import microsoft from './images/microsoft.png'
import azure from './images/azure.png'
import qa from './images/quality-meetup.png'
import angular from './images/angular_meetup.png'
import antyrama from './images/logo-antyrama.svg';
import Logos from './Common/Logos';

class Friends extends Component {
  render() {
    return (
      <Logos title='Kamraci' logos={[
        { image: meetjs, url: 'https://katowice.meetjs.pl/' },
        { image: microsoft },
        { image: azure },
        { image: qa },
        { image: angular },
        { image: antyrama, url: 'http://www.a24.antyrama.org' }
      ]} className='friends' backgroundColor='grey'/>
    );
  }
}

export default Friends;
