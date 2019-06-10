import React, { Component } from 'react';
import Logos from './Logos';
import futureProcessingLogo from '../images/future-processing__logo-2017-white.png';
import katowiceLogo from '../images/katowice_logo.png';
import softserve from '../images/soft-serve.svg';
import isystems from '../images/i-systems-logo.png';
import billennium from '../images/logo_billennium-01.png';
import brainhub from '../images/brainhub.svg';
import accenture from '../images/accenture-logo-black-and-white.png';
import northmill from '../images/93cff76312cb7871ec17d350ea2a78ae727fbc12.jpg';

class Supporters extends Component {
    render() {
        return (
            <Logos
                logos={[
                    {
                        image: softserve,
                        url: 'https://career.softserveinc.com/en-us/vacancies',
                    },
                    {
                        image: futureProcessingLogo,
                        url: 'https://future-processing.pl/',
                    },
                    { image: katowiceLogo, url: 'http://miasto-ogrodow.eu/' },
                    { image: isystems, url: 'https://www.i-systems.pl/' },
                    { image: billennium, url: 'https://billennium.pl/' },
                    { image: brainhub, url: 'https://brainhub.eu/' },
                    {
                        image: accenture,
                        url: 'https://www.accenture.com/pl-pl/careers',
                    },
                    { image: northmill, url: 'https://careers.northmill.com' },
                ]}
                title='Wspierają nas'
                backgroundColor='white'
            />
        );
    }
}

export default Supporters;
