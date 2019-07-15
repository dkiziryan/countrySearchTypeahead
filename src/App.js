import React, { Component } from "react";
import CountrySearch from "./components/countrySearch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <CountrySearch />
      </div>
    );
  }
}

export default App;
