import React from "react";
import { Search } from "./buttonSearch";
import { DatesBooking } from "./dates";
import { Flip } from "./flip";
import { Location } from "./location";
import "./booking.css";

function Booking() {
  return (
    <React.Fragment>
      <div className="booking">
        <h1 className="booking--title">ALQUILER DE CARROS MIAMI</h1>
        <form method="post" action="/" id="booking">
          <div className="form-body">
            <div className="ingreso_ciudad">
              <Location />
            </div>
            <div className="checkbox">
              <Flip />
            </div>
            <div className="fechas field">
              <div className="ingreso">
                <span className="field-icon">
                  <img
                    src={require("../assetsReact/Recogida.png")}
                    alt="Icono de calendario Recogida"
                  />
                </span>
                <div className="field--content__input no_reverse">
                  <label htmlFor="checkout" className="field-label">
                    Recogida
                  </label>
                  <label htmlFor="checkout" className="field-prepend-icon">
                    <DatesBooking />
                  </label>
                </div>
              </div>
            
              <div className="salida">
                <span className="field-icon">
                  <img
                    src={require("../assetsReact/Devolucion.png")}
                    alt="Icono de calendario Devolución"
                  />
                </span>
                <div className="field--content__input no_reverse">
                  <label htmlFor="checkout" className="field-label">
                    Devolución
                  </label>
                  <label htmlFor="checkout" className="field-prepend-icon">
                    <DatesBooking />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            <Search />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export { Booking };
