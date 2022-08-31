import React from "react";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

import "./App.css";

import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="body">
        <Dictionary defaultWord="code" />
      </div>
      <Footer />
    </div>
  );
}
