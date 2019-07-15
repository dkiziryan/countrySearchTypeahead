import React from "react";
import "./countrySearch";

const CountrySuggestions = props => {
  const options = props.results.map(r => <li key={r.numericCode}>{r.name}</li>);
  return <ul className="suggestions">{options}</ul>;
};

export default CountrySuggestions;
