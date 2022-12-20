import React from "react";
import styled from "styled-components";

const MenuButtonWrapper = styled.button`
  border: none;
  background: transparent;
  border: none;
  padding: 0;
  position: relative;
  top: 30%;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;

function MenuButton({ open, handleClick }) {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <svg viewBox="0 0 100 80" width="30" height="20" fill="#000">
        <rect width="90" height="5" />
        <rect y="30" width="70" height="5" />
        <rect y="60" width="50" height="5" />
      </svg>
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <img src={require("../assetsReact/Arrow_back.png")} alt="Go back" />
    </MenuButtonWrapper>
  );
}

export default MenuButton;
