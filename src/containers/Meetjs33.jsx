import React, { Component } from 'react';
import PresentationMaterials from '../components/PresentationMaterials';


class Meetjs33 extends Component {
  render() {
    return (
      <PresentationMaterials presentationTitle='Jak uporządkować stan aplikacji i okiełznać jego asynchroniczność?'>
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
      </PresentationMaterials>
    );
  }
}

export default Meetjs33;