import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Spinning from 'grommet/components/icons/Spinning';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';

import friendProvider from '../services/friend-provider';
import friendEventsProvider from '../services/friend-events-provider';
import Subpage from '../components/Subpage';
import selectMany from '../services/selectMany';
import arrayContainsAnyOf from '../services/arrayContainsAnyOf';

const byDate = ({ date: dateA }, { date: dateB }) =>
    dateA.getTime() - dateB.getTime();

const SingleFilter = ({
    className,
    title,
    elements,
    onChange,
    placeholder,
    value,
}) => (
    <div className={className}>
        <Label>{title}</Label>
        <Select
            options={elements}
            onChange={onChange}
            value={value}
            multiple
            placeholder={placeholder}
        />
    </div>
);

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
    }

    componentDidMount() {
        const subscription = friendEventsProvider(friendProvider).subscribe(
            events => {
                if (events.length > 0) {
                    this.setState({
                        events: [...this.state.events, ...events]
                            .map(event =>
                                Object.assign(event, {
                                    dateString: event.date,
                                    date: new Date(event.date),
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
                            ...selectMany(events, 'location').filter(
                                location =>
                                    !this.state.locations.includes(location)
                            ),
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
                title="Nadchodzące wydarzenia kamratów"
                className="friend-events">
                {this.state.events.length > 0 ? (
                    <React.Fragment>
                        <section className="friend-events__filters">
                            <SingleFilter
                                className="friend-events__filters--single"
                                title="Tematyka"
                                elements={this.state.subjects}
                                placeholder="Kazda"
                                value={this.state.chosenSubjects}
                                onChange={({ value }) =>
                                    this.setState({ chosenSubjects: value })
                                }
                            />
                            <SingleFilter
                                className="friend-events__filters--single"
                                title="Lokalizacja"
                                elements={this.state.locations}
                                placeholder="Wszystkie"
                                value={this.state.chosenLocations}
                                onChange={({ value }) =>
                                    this.setState({ chosenLocations: value })
                                }
                            />
                            <SingleFilter
                                className="friend-events__filters--single"
                                title="Grupa"
                                elements={this.state.events.map(
                                    event => event.group
                                )}
                                placeholder="Wszystkie"
                                value={this.state.chosenGroups}
                                onChange={({ value }) =>
                                    this.setState({ chosenGroups: value })
                                }
                            />
                        </section>
                        <Tiles
                            fill={false}
                            className="friend-events__tiles"
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
                                        className="friend-events__event"
                                        key={`event-${event.name}`}>
                                        <Tile>
                                            <a
                                                href={event.link}
                                                target="_blank">
                                                <Card
                                                    description={event.dateString.toString()}
                                                    heading={event.name}
                                                    label={event.group}
                                                    thumbnail={event.image}
                                                />
                                            </a>
                                        </Tile>
                                    </div>
                                ))}
                        </Tiles>
                    </React.Fragment>
                ) : (
                    <Spinning size="large" />
                )}
            </Subpage>
        );
    }
}

export default FriendEvents;
