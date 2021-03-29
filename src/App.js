import "./App.css";
import React from "react";
import Header from "./components/Header";
import EventList from "./components/EventList";
import Buttons from "./components/Buttons";

class App extends React.Component {
  state = {
    events: [],
    isLoading: true,
    filter: "",
  };

  componentDidMount() {
    console.log("mounting");
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events?apikey=ADIfsBk8bWIm82oSipfj9JvdwNuUhJHR&locale=*&size=50&page=1&sort=date,asc&city=Manchester&countryCode=GB"
    )
      .then((res) => {
        return res.json();
      })
      .then(({ _embedded: { events } }) => {
        console.log("rendering");
        this.setState({ events: events, isLoading: false });
      });
  }

  setFilter = (filter) => {
    console.log(filter);
    this.setState((currState) => {
      return { filter: filter };
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Buttons filter={this.state.filter} setFilter={this.setFilter} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
