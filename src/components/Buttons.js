import React from "react";
import Button from "react-bootstrap/Button";

const Buttons = (props) => {
  return (
    <section>
      <Button
        variant="outline-primary"
        onClick={() => {
          props.setFilter("");
        }}
      >
        All
      </Button>

      <Button
        variant="danger"
        onClick={() => {
          props.setFilter("Sports");
        }}
      >
        Sports
      </Button>

      <Button
        variant="success"
        onClick={() => {
          props.setFilter("Music");
        }}
      >
        Music
      </Button>
      <Button
        variant="info"
        onClick={() => {
          props.setFilter("Arts & Theatre");
        }}
      >
        Arts & Theatre
      </Button>
    </section>
  );
};

export default Buttons;
