import './App.css';
import React from 'react';
import Header from './components/Header';
import EventList from './components/EventList';
import Buttons from './components/Buttons';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Buttons />
        <EventList />
      </div>
    );
  }
}

export default App;
