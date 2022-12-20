import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  z-index: 10;
  display: grid;
  gap: 54px;
  grid-template-columns: 1fr;
  padding: 130px 30px 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: white;
  position: fixed;
  top: 6vh;
  right: ${(props) => (props.open ? "0" : "100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
    padding: 0;
  }
  .container-nav {
    display: contents;
  }
  @media only screen and (max-width: 1200px) {
    .container-nav {
      display: grid;
      gap: 54px;
    }
    a {
      font-size: var(--px22);
    }
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    transform: scale(1.1);
  }
`;
