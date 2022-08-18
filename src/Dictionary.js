import React, { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
    event.target.reset();
  }

  function handleWordSearch(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus="on"
          onChange={handleWordSearch}
        />
      </form>
    </div>
  );
}
