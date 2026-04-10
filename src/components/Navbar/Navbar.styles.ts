import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background: var(--color-primary);
  color: #fff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  position: sticky;
  top: 0;
  z-index: 200;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`;

export const Brand = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: -0.3px;
`;

export const Links = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: rgba(255,255,255,0.12);
    color: #fff;
  }

  &.active {
    background: rgba(255,255,255,0.18);
    color: #fff;
  }
`;
