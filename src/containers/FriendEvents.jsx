import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Spinning from 'grommet/components/icons/Spinning';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';

import friendProvider from '../services/friend-provider';
import friendEventsProvider from '../services/friend-events-provider';
import { forkJoin } from 'rxjs';
import Subpage from '../components/Subpage';
import selectMany from '../services/selectMany';

const byDate = ({ date: dateA }, { date: dateB }) =>
    dateA.getTime() - dateB.getTime();

class FriendEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            subjects: [],
            locations: [],
        };
    }

    componentDidMount() {
        friendEventsProvider(friendProvider).subscribe(events => {
            if (events.length > 0) {
                console.log(events);
                this.setState({
                    events: [...this.state.events, ...events]
                        .map(event =>
                            Object.assign(event, {
                                dateString: event.date,
                                date: new Date(event.date),
                            })
                        )
                        .sort(byDate),
                    subjects: events
                        .filter(event => event.subjects)
                        .reduce(
                            (accumulated, current) => [
                                ...accumulated,
                                ...current.subjects.filter(
                                    subject => !accumulated.includes(subject)
                                ),
                            ],
                            []
                        ),
                    locations: selectMany(events, 'location'),
                });
            }
        });

        console.log(this.state);
    }

    render() {
        return (
            <Subpage
                title="Nadchodzące wydarzenia kamratów"
                className="friend-events">
                {this.state.events.length > 0 ? (
                    <React.Fragment>
                        <section>
                            <Label>Tematyka</Label>
                            <Select
                                options={this.state.subjects}
                                onChange={({ option }) => {}}
                            />
                            <Label>Lokalizacja</Label>
                            <Select
                                options={this.state.locations}
                                onChange={({ option }) => {}}
                            />
                            <Label>Grupa</Label>
                            <Select
                                options={this.state.events.map(
                                    event => event.group
                                )}
                                onChange={({ option }) => {}}
                            />
                        </section>
                        <Tiles
                            fill={false}
                            className="friend-events__tiles"
                            flush={false}>
                            {this.state.events.map(event => (
                                <div
                                    className="friend-events__event"
                                    key={`event-${event.name}`}>
                                    <Tile>
                                        <a href={event.link} target="_blank">
                                            <Card
                                                description={event.dateString}
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
