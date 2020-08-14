import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, UIList, ListItem, Anchor, LinkClick } from './style.js';

import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UIList>
          <ListItem>
            <LinkClick to="/"> Home </LinkClick>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <LinkClick to="/contact"> Contact </LinkClick>
          </ListItem>
        </UIList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
