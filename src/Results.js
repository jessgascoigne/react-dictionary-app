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
        <div>{showPhoneticsAudio()}</div>
        <div>{showPhoneticsText()}</div>
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
