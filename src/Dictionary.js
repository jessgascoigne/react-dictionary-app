import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import Book from "./images/book.svg";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    setLoaded(true);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000130e4a5af89de4d6487477fdf034036db";
    let perPage = "9";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=${perPage}`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <div className="row search">
            <div className="col-lg-6">
              <h1>What word do you want to look up?</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  defaultValue={word}
                  autoFocus="on"
                  onChange={handleWordSearch}
                />
              </form>
            </div>

            <div className="col-lg-6">
              <img
                src={Book}
                alt="girl reading"
                className="girl-reading img-fluid"
              />
            </div>
          </div>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
  }
}
