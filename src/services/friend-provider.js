import eventProviders from '../constants/eventProviders';

import meetjs from '../images/meetjs-logo-white-katowice.svg';
import microsoft from '../images/microsoft.png';
import azure from '../images/azure.png';
import qa from '../images/quality-meetup.png';
import angular from '../images/angular_meetup.png';
import antyrama from '../images/logo-antyrama.svg';
import meetjsInvert from '../images/meetjs.png';
import fm from '../images/functionalminers-invert.png';
import sjug from '../images/jug-invert.png';
import barcamp from '../images/barcamp-invert.png';

export default function getFriends() {
    return [
        {
            name: 'meetjs',
            logo: { image: meetjs, invertImage: meetjsInvert, url: 'https://katowice.meetjs.pl/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/meetjs-katowice/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'microsoft',
            logo: { image: microsoft, url: 'https://www.meetup.com/Śląska-Grupa-Microsoft-Meetup/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Śląska-Grupa-Microsoft-Meetup/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'azure',
            logo: { image: azure, url: 'https://www.meetup.com/Microsoft-Azure-Users-Group-Poland/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Microsoft-Azure-Users-Group-Poland/events',
            eventProviderName: eventProviders.meetup,
            additionalFilters: ['KTW', 'GLC']
        },
        {
            name: 'qa',
            logo: { image: qa, url: 'https://www.meetup.com/Quality-Meetup/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Quality-Meetup/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'angular',
            logo: { image: angular, url: 'https://www.meetup.com/Angular-Silesia/' },
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Angular-Silesia/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'antyrama',
            logo: { image: antyrama, url: 'http://www.a24.antyrama.org' }
        },
        {
            name: 'functional-miners',
            logo: { image: fm, url: 'https://www.meetup.com/Functional-Miners/'},
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Functional-Miners/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'jug',
            logo: { image: sjug, url: 'https://silesia.jug.pl/'},
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Silesia-JUG/events',
            eventProviderName: eventProviders.meetup
        },
        {
            name: 'barcamp',
            logo: { image: barcamp, url: 'https://www.meetup.com/Gliwice-Software-BarCamp/'},
            eventProviderUrl: 'https://grubait.azurewebsites.net/meetup/Gliwice-Software-BarCamp/events',
            eventProviderName: eventProviders.meetup
        }
    ];
}