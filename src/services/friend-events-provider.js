import { ajax } from 'rxjs/ajax';
import { map, flatMap } from 'rxjs/operators';
import { LocalDate, LocalTime } from 'js-joda';

import eventProviders from '../constants/eventProviders';
import { from } from 'rxjs';

export default function getEvents(getFriends) {
    const friends = getFriends();
    return from(friends.filter(friend => friend.eventProviderUrl)).pipe(
        flatMap(friend => {
            return ajax({
                url: friend.eventProviderUrl,
                method: 'GET',
                crossDomain: false,
                headers: { friend: friend.name },
            }).pipe(
                map(data => {
                    switch (friend.eventProviderName) {
                        case eventProviders.eventbrite:
                            return data.response.events.map(event => ({
                                name: event.name.text,
                                link: event.url,
                                group: friend.name,
                                image: friend.logo.image,
                                date: LocalDate.parse(event.start.local),
                                time: LocalDate.parse(event.start.local),
                                subjects: friend.subjects,
                                location: friend.location,
                            }));
                        case eventProviders.meetup:
                            return data.response
                                .filter(event =>
                                    friend.additionalFilters
                                        ? friend.additionalFilters.some(
                                              filter =>
                                                  event.name.includes(filter)
                                          )
                                        : true
                                )
                                .map(event => ({
                                    name: event.name,
                                    link: event.link,
                                    group: event.group.name,
                                    image: friend.logo.image,
                                    date: LocalDate.parse(event.local_date),
                                    time: LocalTime.parse(event.local_time),
                                    subjects: friend.subjects,
                                    location: friend.location,
                                }));
                    }
                })
            );
        })
    );
}
