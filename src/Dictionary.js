import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    setLoaded(true);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    event.target.reset();
  }

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search for a word..."
            defaultValue={props.defaultWord}
            autoFocus="on"
            onChange={handleWordSearch}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    search();
  }
}
