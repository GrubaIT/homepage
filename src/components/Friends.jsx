import React, { Component } from "react";
import friendProvider from '../services/friend-provider';
import Logos from './Logos';

class Friends extends Component {
  render() {
    return (
      <Logos title='Kamraci' logos={friendProvider().map(friend => friend.logo)} className='friends' backgroundColor='grey' />
    );
  }
}

export default Friends;
