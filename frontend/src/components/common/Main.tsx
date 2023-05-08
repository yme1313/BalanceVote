import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import mainImg from '../../assets/img/searching.png';
import mainImg2 from '../../assets/img/rank.png';

export default function Main() {
  return (
    <>
      <Wrapper>
        <LeftBox>
          <MainImg src={mainImg} alt="main" />
        </LeftBox>
        <RightBox>
          <TextBox>
            <TextItem>
              저녁을 먹었는데도 또 배고파...😅 <span className='lavender_bold'>야식 최고 메뉴는?</span>
            </TextItem>
            <TextItem>
              으...🤮 어제 과음을 해서 해장이 필요해! <span className='lavender_bold'>해장 최고 메뉴는?</span>
            </TextItem>
            <TextItem>
              백수로 용돈 <span className='lavender_bold'>200만원</span>으로 살기 vs 주6일 세후 <span className='lavender_bold'>500만원</span> 벌면서 살기
            </TextItem>
            <TextItem>재미있는 투표와 밸런스 게임을 즐겨보자💓</TextItem>
            <Link to="/vote">
              <ColorButton variant="contained">GO 💨</ColorButton>
            </Link>
          </TextBox>
        </RightBox>
      </Wrapper>
      <Wrapper>
        <LeftBox>
          <TextBox2>
            <TextItem><span className='lavender_bold'>남/녀별 선택</span>이 어떤지 궁금해❓</TextItem>
            <TextItem><span className='lavender_bold'>내 또래들의 선택</span>이 무엇일까 궁금해❓</TextItem>
            <TextItem>들어와 <span className='lavender_bold'>결과</span>를 보여줄께❗</TextItem>
            <Link to="/stats">
              <ColorButton variant="contained">GO 💨</ColorButton>
            </Link>
          </TextBox2>
        </LeftBox>
        <RightBox>
          <MainImg2 src={mainImg2} alt="main2" />
        </RightBox>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  font-family: "Stylish", sans-serif;
  display: flex;
  height: 400px;
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
  left: 15%;
`;

const MainImg2 = styled.img`
  width: 50%;
  position: absolute;
  top: 70px;
  right: 15%;
`;

const ColorButton = styled(Button)`
  background-color: rgb(144, 202, 249) !important;
`;

const TextBox = styled.div`
  position: absolute;
  top: 120px;
`;

const TextBox2 = styled(TextBox)`
  left: 15%;
`;

const TextItem = styled.div`
  margin: 10px 0;
`;
