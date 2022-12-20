import React from "react";
import { NavbarWrapper } from "../stylesByJS/NavbarStyles";
import { Networks } from "./Networks";
function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <div className="container-nav">
        <a href="#" title="Click para ir a Requisitos de Alquiler">Requisitos de Alquiler</a>
        <a href="#" title="Click para ir a Preguntas frecuentes">Preguntas frecuentes</a>
        <a href="#" title="Click para ir a Localidades">Localidades</a>
        <a href="#" title="Click para ir a Contáctanos">Contáctanos</a>
      </div>
      <Networks />
    </NavbarWrapper>
  );
}

export default Navbar;
