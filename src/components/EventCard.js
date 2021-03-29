import React from "react";

const EventCard = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p> {props.venue}</p>
      <img src={props.picture.url} alt={`a picture of ${props.name}`} />
      <p>{props.date}</p>
      <p>{props.time}</p>
      <p>
        buy your tickets <a href={props.buyTickets}> here </a>
      </p>
    </div>
  );
};

export default EventCard;
