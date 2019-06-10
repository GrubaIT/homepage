import React from 'react';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';

const OurEvent = ({ event }) => (
    <Tile>
        <Card
            thumbnail={
                <a href={event.url} target='_blank'>
                    <img src={event.logo.original.url} />
                </a>
            }
            label={<FullDate dateString={event.start.local} />}
            pad={{ horizontal: 'small' }}
            link={<Anchor href={event.url} label='Zobacz wydarzenie' />}
            heading={<Heading tag='h6'>{event.name.text}</Heading>}
        />
    </Tile>
);
export default OurEvent;

const FullDate = ({ dateString }) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
};
