import React from "react";
import "./flip.css";

function Flip() {
  return (
    <div className="switch--container">
      <label className="switch">
        <input type="checkbox" />
        <div className="slider"></div>
        <div className="slider_on"></div>
        <div className="slider_off"></div>
      </label>
      <label className="switch--title" htmlFor="switch">lo quiero devolver en otra localidad </label>
    </div>
  );
}

export { Flip };
