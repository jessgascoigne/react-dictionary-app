import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <h1>📖 Dictionary App</h1>
        <Dictionary defaultWord="code" />
      </div>
      <Footer />
    </div>
  );
}
