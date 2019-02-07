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
import devduck from '../images/devduck1.jpg';
import eventSubjects from '../constants/eventSubjects';
import eventLocations from '../constants/eventLocations';

export default function getFriends() {
    return [
        {
            name: 'meetjs',
            logo: {
                image: meetjs,
                invertImage: meetjsInvert,
                url: 'https://katowice.meetjs.pl/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/meetjs-katowice/events',
            eventProviderName: eventProviders.meetup,
            subjects: [
                eventSubjects.angular,
                eventSubjects.react,
                eventSubjects.javascript,
                eventSubjects.node,
            ],
            location: eventLocations.kato,
        },
        {
            name: 'microsoft',
            logo: {
                image: microsoft,
                url: 'https://www.meetup.com/Śląska-Grupa-Microsoft-Meetup/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Śląska-Grupa-Microsoft-Meetup/events',
            eventProviderName: eventProviders.meetup,
            subjects: [eventSubjects.net, eventSubjects.azure],
            location: eventLocations.kato,
        },
        {
            name: 'azure',
            logo: {
                image: azure,
                url:
                    'https://www.meetup.com/Microsoft-Azure-Users-Group-Poland/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Microsoft-Azure-Users-Group-Poland/events',
            eventProviderName: eventProviders.meetup,
            additionalFilters: ['KTW', 'GLC'],
            subjects: [
                eventSubjects.azure,
                eventSubjects.devops,
                eventSubjects.cloud,
                eventSubjects.serverless,
                eventSubjects.security,
            ],
            location: eventLocations.kato,
        },
        {
            name: 'qa',
            logo: { image: qa, url: 'https://www.meetup.com/Quality-Meetup/' },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Quality-Meetup/events',
            eventProviderName: eventProviders.meetup,
            subjects: [eventSubjects.security, eventSubjects.tests],
            location: eventLocations.kato,
        },
        {
            name: 'angular',
            logo: {
                image: angular,
                url: 'https://www.meetup.com/Angular-Silesia/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Angular-Silesia/events',
            eventProviderName: eventProviders.meetup,
            subjects: [eventSubjects.angular, eventSubjects.javascript],
            location: eventLocations.gliwice,
        },
        {
            name: 'antyrama',
            logo: { image: antyrama, url: 'http://www.a24.antyrama.org' },
            subjects: [],
            location: eventLocations.kato,
        },
        {
            name: 'functional-miners',
            logo: {
                image: fm,
                url: 'https://www.meetup.com/Functional-Miners/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Functional-Miners/events',
            eventProviderName: eventProviders.meetup,
            subjects: [eventSubjects.functional],
            location: eventLocations.kato,
        },
        {
            name: 'jug',
            logo: { image: sjug, url: 'https://silesia.jug.pl/' },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Silesia-JUG/events',
            eventProviderName: eventProviders.meetup,
            subjects: [
                eventSubjects.java,
                eventSubjects.tests,
                eventSubjects.softwareCraftmanship,
            ],
            location: eventLocations.kato,
        },
        {
            name: 'barcamp',
            logo: {
                image: barcamp,
                url: 'https://www.meetup.com/Gliwice-Software-BarCamp/',
            },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Gliwice-Software-BarCamp/events',
            eventProviderName: eventProviders.meetup,
            subjects: [
                eventSubjects.softwareCraftmanship,
                eventSubjects.tests,
                eventSubjects.security,
            ],
            location: eventLocations.gliwice,
        },
        {
            name: 'devduck',
            logo: { image: devduck, url: 'https://www.meetup.com/Devduck' },
            eventProviderUrl:
                'https://grubait.azurewebsites.net/meetup/Devduck/events',
            eventProviderName: eventProviders.meetup,
            subjects: [
                eventSubjects.react,
                eventSubjects.javascript,
                eventSubjects.node,
            ],
            location: eventLocations.gliwice,
        },
    ];
}
