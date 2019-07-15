import React from "react";
import axios from "axios";
import CountrySuggestions from "./countrySuggestions";
import * as constants from "./../constants";
import "./countrySearch.css";

class CountrySearch extends React.Component {
  state = {
    query: "",
    results: [],
    error: {
      status: false,
      message: ""
    }
  };

  getInfo = () => {
    axios
      .get(`${constants.COUNTRY_SEARCH_API_URL}${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data
        });
      })
      .catch(e => {
        this.setState({
          error: {
            status: true,
            message: "Cannot find anymore countries matching the input"
          }
        });
      });
  };

  handleInput = () => {
    if (!this.search.value) {
      this.setState({
        results: []
      });
    }

    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for a country"
          ref={input => (this.search = input)}
          onChange={this.handleInput}
        />
        <CountrySuggestions
          className="suggestions"
          results={this.state.results}
        />
        {this.state.error.status && (
          <div className="error">Error: {this.state.error.message}</div>
        )}
      </form>
    );
  }
}

export default CountrySearch;
