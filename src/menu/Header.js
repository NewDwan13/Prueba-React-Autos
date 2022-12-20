import React, { useState } from "react";
import { HeaderWrapper } from "../stylesByJS/Header";
import Navbar from "./Navbar";
import MenuButton from "./MenuButton";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper className={`Menu ${open && "active"}`}>
      <MenuButton open={open} handleClick={handleClick} />
      <div className="Menu--logo">
        <button>
          <img src={require("../assetsReact/Logo.png")} alt="Logo" />
        </button>
      </div>
      
      <Navbar open={open} />

      <div className="Menu--info">
        <button>
          <img
            className={`Menu--info__price ${open && "active"}`}
            src={require("../assetsReact/Price.png")}
            alt="price"
          />
        </button>
        <button>
          <img
            className="Menu--info__country"
            src={require("../assetsReact/Colombia.png")}
            alt="country"
          />
        </button>
      </div>
    </HeaderWrapper>
  );
}

export { Header };
