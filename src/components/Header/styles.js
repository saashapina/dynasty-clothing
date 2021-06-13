import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const navStyles = css`
  padding: 0 15px;
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  margin-bottom: 25px;
  align-items: center;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkedNavItem = styled(Link)`
  ${navStyles}
`;

export const NavItem = styled.div`
  ${navStyles}
`;
