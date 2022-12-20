import React from "react";

function Search() {
  return (
    <React.Fragment>
      <button type="submit" className="button">
        <img
          src={require("../assetsReact/search-icon.png")}
          alt="Icono de búsqueda"
        />
      </button>
    </React.Fragment>
  );
}

export { Search };
