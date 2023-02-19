import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <div className="theme"></div>
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
