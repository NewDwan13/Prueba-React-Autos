import React from "react";
import "./announcement.css";

function Announcement() {
  return (
    <React.Fragment>
      <div className="Announcement">
        <div className="Announcement--img">
          <picture>
            <img
              src={require("../assetsReact/PCAR_US.png")}
              alt="Imagen de un auto"
            />
            <span></span>
          </picture>
          <p>
            ¡SEGURO DE VIAJE <span>GRATIS!</span>
          </p>
        </div>
        <p className="Announcement--info">
          Con cobertura médica frente al Coronavirus de USD $100.000
        </p>
      </div>
    </React.Fragment>
  );
}

export { Announcement };
