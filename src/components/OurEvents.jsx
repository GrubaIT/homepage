import React, { Component } from 'react';
import Section from './Section';
import Tiles from 'grommet/components/Tiles';
import Spinning from 'grommet/components/icons/Spinning';
import Box from 'grommet/components/Box';

import OurEvent from './OurEvent';
import fetchEventsFromEventbrite from '../services/gruba-events-provider';

export default class OurEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
    }
    componentDidMount() {
        fetchEventsFromEventbrite().then(events =>
            this.setState({ events: events.slice(0, 10) })
        );
    }

    render() {
        return (
            <Section
                color='white'
                title='Nasze ostatnie wydarzenia'
                className='section-events'>
                <Box
                    className='our-events-container'
                    pad={{ vertical: 'medium' }}
                    size={{ width: 'xxlarge' }}
                    direction='row'>
                    {this.state.events.length > 0 ? (
                        <Tiles fill>
                            {this.state.events.map(event => (
                                <OurEvent
                                    key={`gruba-event-${event.name.text}`}
                                    event={event}
                                />
                            ))}
                        </Tiles>
                    ) : (
                        <Spinning size='large' />
                    )}
                </Box>
                <a
                    href='https://www.eventbrite.com/o/grubait-17671110911'
                    target='_blank'>
                    Zobacz wszystkie wydarzenia
                </a>
            </Section>
        );
    }
}
