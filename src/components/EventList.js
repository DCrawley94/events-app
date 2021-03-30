import React from "react";
import EventCard from "./EventCard";
import Container from "react-bootstrap/Container";

const EventList = ({ events, filter }) => {
  console.log(filter);
  if (!filter.length) {
    return (
      <div className="events-list-div">
        {events.map(
          ({ id, dates, name, url, images, _embedded, classifications }) => {
            const genre = classifications[0].segment.name;

            return (
              <EventCard
                key={id}
                name={name}
                date={dates.start.localDate}
                time={dates.start.localTime}
                buyTickets={url}
                picture={images[0]}
                venue={_embedded.venues[0].name}
                genre={genre}
              />
            );
          }
        )}
      </div>
    );
  } else {
    return (
      <div className="events-list-div">
        {events.map(
          ({ id, dates, name, url, images, _embedded, classifications }) => {
            const genre = classifications[0].segment.name;
            if (genre === filter) {
              return (
                <EventCard
                  key={id}
                  name={name}
                  date={dates.start.localDate}
                  time={dates.start.localTime}
                  buyTickets={url}
                  picture={images[0]}
                  venue={_embedded.venues[0].name}
                  genre={genre}
                />
              );
            }
          }
        )}
      </div>
    );
  }

  // }
};

export default EventList;
