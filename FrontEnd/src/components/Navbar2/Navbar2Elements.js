import styled from "styled-components";

import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
export const Nav = styled.nav`
  /* background: #0d060d; ////////////////couleur nav */
  background: ${({ scrollNav }) => (scrollNav ? "#0d060d" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  z-index: 1;
  width: 100;
  padding: 0 24px;
  max-width: 1100px;
  
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 40px;
  margin-left: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #ff9800;
  }

  &:hover {
    border-bottom: 3px solid #ff9800;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #44aa95; /////////////////////
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #44aa95;
  }
`;
export const Search=styled.div`
height: 100vh;
width: 100%;
background: #FF676D;
display: flex;
align-items: center;
justify-content: center;
`;
export const Searchbox=styled.div`
position: relative;
height: 50px;
max-width: 50px;
margin: auto;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
border-radius: 25px;
transition: all 0.3s ease;
`;
export const Texto=styled.input`
position: absolute;
 height: 100%;
 width: 100%;
 border-radius: 25px;
 background: #fff;
 outline: none;
 border: none;
 padding-left: 20px;
 font-size: 18px;
`;
export const Icon=styled.i`
position: absolute;
  right: -2px;
  top: 0;
  width: 50px;
  background: #FFF;
  height: 100%;
  text-align: center;
  line-height: 50px;
  color: #FF676D;
  font-size: 20px;
  border-radius: 25px;
`