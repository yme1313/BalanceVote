import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import github from '../../assets/img/github.png';

export default function Footer() {
  return (
    <>
      <Wrapper>
        <Content>2023 Side Project, Made By yme13</Content>
        <Link to="https://github.com/yme1313/BalanceVote">
          <GithubImg src={github} alt="github" />
        </Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 40px;
  line-height : 40px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(224, 224, 224);
`;

const Content = styled.div``;

const GithubImg = styled.img`
  width: 20px;
  margin-top: 10px;
  justify-content: space-between;
`;
