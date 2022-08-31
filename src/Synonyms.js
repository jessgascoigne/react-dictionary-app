import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <ul>
          <span className="synonyms-heading">Synonyms: </span>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}> {synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
