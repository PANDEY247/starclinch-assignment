import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 20px 0;

`;
const NavList = styled.ul`
  display: flex;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;
const NavLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 1rem;
  color: #222222;

`;
export const Header = () => {
  return (
    <div>
      <NavContainer>
        <NavList>
          <NavLink href="home"> Home</NavLink>
          <NavLink href="celebrity appearance">CELEBRITY APPEARANCE</NavLink>
          <NavLink href="Ranbir Kapoor">Ranbir Kapoor</NavLink>
        </NavList>
      </NavContainer>
    </div>
  );
};
