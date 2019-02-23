import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Spinning from 'grommet/components/icons/Spinning';

import friendProvider from '../services/friend-provider';
import friendEventsProvider from '../services/friend-events-provider';
import byDate from '../services/byDate';
import Subpage from '../components/Subpage';
import selectMany from '../services/selectMany';
import arrayContainsAnyOf from '../services/arrayContainsAnyOf';
import { DateTimeFormatter } from 'js-joda';
import EventFilters from '../components/EventFilters';

const giveMeArray = maybeArray =>
    Array.isArray(maybeArray) ? maybeArray : [maybeArray];

class FriendEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            subjects: [],
            locations: [],
            subscription: null,
            chosenSubjects: [],
            chosenLocations: [],
            chosenGroups: [],
        };
        this.updateChosenSubjects = ({ value }) =>
            this.setState({ chosenSubjects: giveMeArray(value) });
        this.updateChosenLocations = ({ value }) =>
            this.setState({ chosenLocations: giveMeArray(value) });
        this.updateChosenGroups = ({ value }) =>
            this.setState({ chosenGroups: giveMeArray(value) });
    }

    componentDidMount() {
        const subscription = friendEventsProvider(friendProvider).subscribe(
            events => {
                if (events.length > 0) {
                    this.setState({
                        events: [...this.state.events, ...events]
                            .map(event =>
                                Object.assign(event, {
                                    dateString: event.date.format(
                                        DateTimeFormatter.ofPattern(
                                            'dd.MM.yyyy'
                                        )
                                    ),
                                })
                            )
                            .sort(byDate),
                        subjects: [
                            ...this.state.subjects,
                            ...events
                                .filter(event => event.subjects)
                                .reduce(
                                    (accumulated, current) => [
                                        ...accumulated,
                                        ...current.subjects.filter(
                                            subject =>
                                                !accumulated.includes(
                                                    subject
                                                ) &&
                                                !this.state.subjects.includes(
                                                    subject
                                                )
                                        ),
                                    ],
                                    []
                                ),
                        ],
                        locations: [
                            ...this.state.locations,
                            ...selectMany(events, 'location'),
                        ],
                    });
                }
            }
        );
        this.setState({ subscription });
    }

    componentWillUnmount() {
        this.state.subscription.unsubscribe();
    }

    render() {
        return (
            <Subpage
                title='Nadchodzące wydarzenia kamratów'
                className='friend-events'>
                {this.state.events.length > 0 ? (
                    <React.Fragment>
                        <EventFilters
                            containerClassName='friend-events__filters'
                            singleFilterClassName='friend-events__filters--single'
                            filters={[
                                {
                                    title: 'Tematyka',
                                    allElements: this.state.subjects,
                                    placeholder: 'Każda',
                                    chosenElements: this.state.chosenSubjects,
                                    onChange: this.updateChosenSubjects,
                                },
                                {
                                    title: 'Lokalizacja',
                                    allElements: this.state.locations,
                                    placeholder: 'Wszystkie',
                                    chosenElements: this.state.chosenLocations,
                                    onChange: this.updateChosenLocations,
                                },
                                {
                                    title: 'Grupa',
                                    allElements: this.state.events.map(
                                        event => event.group
                                    ),
                                    placeholder: 'Wszystkie',
                                    chosenElements: this.state.chosenGroups,
                                    onChange: this.updateChosenGroups,
                                },
                            ]}
                        />
                        <Tiles
                            fill={false}
                            className='friend-events__tiles'
                            flush={false}>
                            {this.state.events
                                .filter(
                                    event =>
                                        this.state.chosenSubjects.length ===
                                            0 ||
                                        arrayContainsAnyOf(
                                            event.subjects,
                                            this.state.chosenSubjects
                                        )
                                )
                                .filter(
                                    event =>
                                        this.state.chosenLocations.length ===
                                            0 ||
                                        this.state.chosenLocations.includes(
                                            event.location
                                        )
                                )
                                .filter(
                                    event =>
                                        this.state.chosenGroups.length === 0 ||
                                        this.state.chosenGroups.includes(
                                            event.group
                                        )
                                )
                                .map(event => (
                                    <div
                                        className='friend-events__event'
                                        key={`event-${event.name}`}>
                                        <Tile>
                                            <a
                                                href={event.link}
                                                target='_blank'>
                                                <Card
                                                    description={event.name}
                                                    heading={event.group}
                                                    label={`${
                                                        event.dateString
                                                    } ${event.time.format(
                                                        DateTimeFormatter.ofPattern(
                                                            'HH:mm'
                                                        )
                                                    )}`}
                                                    thumbnail={event.image}
                                                />
                                            </a>
                                        </Tile>
                                    </div>
                                ))}
                        </Tiles>
                    </React.Fragment>
                ) : (
                    <Spinning size='large' />
                )}
            </Subpage>
        );
    }
}

export default FriendEvents;
