import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #335f78;
  padding: 10px 20px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavItems = styled.div`
  display: flex;
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 15px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    color: #335f78;
  }
`;
