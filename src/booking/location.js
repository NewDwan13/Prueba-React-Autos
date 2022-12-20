import React from "react";
import "./location.css";
function Location() {
  return (
    <div className="field">
      <span className="field--icon">
        <img
          src={require("../assetsReact/Location.png")}
          alt="Icono de calendario Recogida"
        />
      </span>
      <div className="field--content__input">
        <label htmlFor="guestname" className="field--label">
          Ciudad, Aeropuerto o Ciudad
        </label>
        <label htmlFor="guestname" className="field--prepend-icon">
          <input
            type="text"
            name="guestname"
            id="guestname"
            className="gui-input"
            required=""
            placeholder="Localidad de Retiro"
          />
        </label>
      </div>
    </div>
  );
}

export { Location };
