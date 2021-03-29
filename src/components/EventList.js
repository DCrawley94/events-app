import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events }) => {
  console.log(events);
  return (
    <div>
      {events.map(({ id, dates, name, url, images, _embedded }) => {
        return (
          <EventCard
            key={id}
            name={name}
            date={dates.start.localDate}
            time={dates.start.localTime}
            buyTickets={url}
            picture={images[0]}
            venue={_embedded.venues[0].name}
          />
        );
      })}
    </div>
  );
};

export default EventList;
