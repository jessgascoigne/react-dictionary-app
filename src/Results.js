import React from "react";
import Meaning from "./Meaning";

import "./Results.css";

export default function Results(props) {
  function showPhoneticsAudio() {
    if (props.results.phonetics[0].audio.length > 0) {
      return (
        <button>
          <a
            href={props.results.phonetics[0].audio}
            target="_blank"
            rel="noreferrer"
          >
            listen
          </a>
        </button>
      );
    } else {
      return null;
    }
  }

  function showPhoneticsText() {
    if (props.results.phonetics[0].text.length > 0) {
      return <h5>{props.results.phonetics[0].text}</h5>;
    }
  }

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-6 col-sm-2">{showPhoneticsAudio()}</div>
            <div className="w-100"></div>
            <div className="col-6 col-sm-2 text-center">
              {showPhoneticsText()}
            </div>
          </div>
        </div>
        <hr />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
