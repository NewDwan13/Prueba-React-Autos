import React from "react";
import "./Networks.css";
function Networks() {
  return (
    <div className="networks">
      <p className="networks--text">SIGUENOS EN</p>
      <ul className="networks--items">
        <li>
          <a href="#" title="Click para ir a Facebook">
            <img
              className="network-item"
              src={require("../assetsReact/face.png")}
              alt="Logo de Facebook"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Click para ir a Twitter">
            <img
              className="network-item"
              src={require("../assetsReact/twitter.png")}
              alt="Logo de Twitter"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Click para ir a Gmail">
            <img
              className="network-item"
              src={require("../assetsReact/gmail.png")}
              alt="Logo de Gmail"
            />
          </a>
        </li>
        <li>
          <a href="#" title="Click para ir a Instagram">
            <img
              className="network-item"
              src={require("../assetsReact/Insta.png")}
              alt="Logo de Instagram"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export { Networks };
