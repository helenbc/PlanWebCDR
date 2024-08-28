import React from 'react';
import { NavBarContainer, Logo, NavItems, NavItem, LogoContainer } from './styles';

//Link ancora Next pesquisar 
const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo src="/logo1.png" alt="Logo 1" />
        <Logo src="/logo2.png" alt="Logo 2" />
      </LogoContainer>
      <NavItems>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;
