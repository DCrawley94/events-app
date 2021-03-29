import React from "react";

const Buttons = (props) => {
  return (
    <section>
      <button> All </button>
      <button onClick= {(event) => {props.setFilter("sports")}} </section>>Sports
      <button> Music </button>
      <button> Arts & Theatre </button>
    </section>
  );
};

export default Buttons;
