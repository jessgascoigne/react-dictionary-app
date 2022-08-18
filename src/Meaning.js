import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <h3>{definition.definition}</h3>
              <br />
              <p>{definition.example}</p>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
