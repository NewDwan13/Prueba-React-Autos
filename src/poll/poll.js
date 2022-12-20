import React from "react";
import "./poll.css";

function Poll() {
  return (
    <div className="rating-container">
      <label className="rating-label">
        <strong>
          <span>
            <img
              src={require("../assetsReact/Star.png")}
              alt="Icon Trustpilot"
            />
          </span>
          Trustpilot
        </strong>
        <div className="rating-calc">
          <strong>2.5 / 5</strong>
          <input
            className="rating"
            max={5}
            step="0.5"
            style={{ "--value": "2.5" }}
            type="range"
            defaultValue="2.5"
          />
        </div>
      </label>
      <p>Basado en 3312+ comentarios</p>
    </div>
  );
}

export { Poll };
