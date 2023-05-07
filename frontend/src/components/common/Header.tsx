import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png'

export default function Header() {

  return (
    <>
      <NavBar>
          <Link to="/" style={{ width : '110px' }}>
              <LogoImg src={logo} alt="logo" />
          </Link>
          <ItemList>
            <Item>
              <Link to='/notice'>Notice</Link>
            </Item>
            <Item>
              <Link to='/vote'>Vote</Link>
            </Item>
            <Item>
              <Link to='/login'>Login</Link>
            </Item>   
          </ItemList>
      </NavBar>
    </>
  );
}

const NavBar = styled.div`
  height : 60px;
  line-height : 60px;
  font-family: "Pangolin", sans-serif;
  display : flex;
  position : static;
  justify-content: space-between;
  border-bottom : 1px solid #e0e0e0;
  box-shadow: 3px 7px 7px #e0e0e0;
  background : rgb(144, 202, 249);
`;

const LogoImg = styled.img`
  width : 40%;
  padding : 5px;
  padding-left : 20px;
`

const ItemList = styled.div`
  display : flex;
  width : 300px;
  justify-content: space-around;
`

const Item = styled.div`
  & > a {
    color : white;
  }
`

