import React from 'react';
import styled from 'styled-components';

import mainImg from '../../assets/img/searching.png';
import mainImg2 from '../../assets/img/rank.png'
 
export default function Main() {
  return (
    <>
      <Wrapper>
        <LeftBox>
          <MainImg src={mainImg} alt="main" />
        </LeftBox>
        <RightBox>
          <div>123</div>
          <div>가나다라마바사</div>
        </RightBox>
      </Wrapper>
      <Wrapper>
        <LeftBox>
          <div>123</div>
          <div>가나다라마바사</div>
        </LeftBox>
        <RightBox>
          <MainImg2 src={mainImg2} alt="main2" />
        </RightBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height : 500px;
`;
const LeftBox = styled.div`
  width: 50%;
  position: relative;
`;
const RightBox = styled.div`
  width: 50%;
  position: relative;
`;
const MainImg = styled.img`
  width: 50%;
  position: absolute;
  top: 100px;
  left: 25%;
`;

const MainImg2 = styled(MainImg)`
  left : none;  
  right : 25%; 
  top : 50px;
`
