import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <h1>What word do you want to look up?</h1>
        <Dictionary defaultWord="code" />
      </div>
      <Footer />
    </div>
  );
}
