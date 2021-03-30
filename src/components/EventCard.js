import React from "react";
import Card from "react-bootstrap/Card";

const EventCard = (props) => {
  return (
    <div className="event-div">
      <Card>
        <Card.Img
          className="card-images"
          variant="top"
          src={props.picture.url}
          alt={`a picture of ${props.name}`}
        />
        <Card.Header>{props.name}</Card.Header>
        <p> {props.venue}</p>
        <p>{props.date}</p>
        <p>{props.time}</p>
        <p>
          buy your tickets <a href={props.buyTickets}> here </a>
        </p>
        <p>{props.genre}</p>
      </Card>
    </div>
  );
};

export default EventCard;
