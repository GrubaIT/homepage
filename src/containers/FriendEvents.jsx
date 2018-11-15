import React, { Component } from "react";
import Tiles from "grommet/components/Tiles";
import Tile from "grommet/components/Tile";
import Card from "grommet/components/Card";
import Spinning from "grommet/components/icons/Spinning";

import friendProvider from "../services/friend-provider";
import friendEventsProvider from "../services/friend-events-provider";
import { forkJoin } from "rxjs";
import Subpage from "../components/Subpage";


const byDate = ({ date: dateA }, { date: dateB }) =>
  dateA.getTime() - dateB.getTime();

class FriendEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    forkJoin(friendEventsProvider(friendProvider)).subscribe(x => {
      this.setState({
        events: [...this.state.events, ...x]
          .reduce((accumulated, current) => [...accumulated, ...current])
          .map(event =>
            Object.assign(event, {
              dateString: event.date,
              date: new Date(event.date)
            })
          )
          .sort(byDate)
      });
    });
  }

  render() {
    return (
      <Subpage
        title="Nadchodzące wydarzenia kamratów"
        className="friend-events"
      >
        {this.state.events.length > 0 ? (
          <Tiles fill={false} className="friend-events__tiles" flush={false}>
            {this.state.events.map(event => (
              <div className="friend-events__event" key={`event-${event.name}`}>
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
        ) : (
          <Spinning size="large" />
        )}
      </Subpage>
    );
  }
}

export default FriendEvents;
