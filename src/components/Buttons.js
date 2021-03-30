import React from 'react';

const Buttons = (props) => {
  return (
    <section>
      <button
        onClick={(event) => {
          props.setFilter('');
        }}
      >
        {' '}
        All{' '}
      </button>
      <button
        onClick={(event) => {
          props.setFilter('Sports');
        }}
      >
        Sports
      </button>
      <button
        onClick={(event) => {
          props.setFilter('Music');
        }}
      >
        {' '}
        Music{' '}
      </button>
      <button
        onClick={(event) => {
          props.setFilter('Arts & Theatre');
        }}
      >
        {' '}
        Arts & Theatre{' '}
      </button>
    </section>
  );
};

export default Buttons;
