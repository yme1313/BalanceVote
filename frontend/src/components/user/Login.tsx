import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useRecoilState } from "recoil";
import { userState } from '../../recoil/user';

import kakaoImg from '../../assets/img/kakao_login.png';
import naverImg from '../../assets/img/naver_login.png';

export default function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useRecoilState(userState);

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleClickLogin = () => {
    console.log('일반 로그인');
    console.log('id : ' + id + ', password : ' + password)
  };
  
  const handleClickKakao = () => {
    console.log('카카오 로그인');
  };
  
  const handleClickNaver = () => {
    console.log('네이버 로그인');
  };

  return (
    <>
      <Wrapper>
        <LoginForm>
          <LoginFormTitle>LOGIN</LoginFormTitle>
          <CustomInput
            id="outlined"
            label="ID"
            name="id"
            type="text"
            onChange={handleChangeId}
            fullWidth
          />
          <CustomInput
            id="outlined-required"
            label="PASSWORD"
            name="password"
            type="password"
            autoComplete="on"
            onChange={handleChangePassword}
            fullWidth
          />
          <CustomButton
            variant="contained"
            onClick={handleClickLogin}
            fullWidth
          >
            LOGIN
          </CustomButton>
          <SnsLoginBox>
            <div>SNS LOGIN</div>
            <SnsLoginImgBox>
              <SnsLogin
                src={kakaoImg}
                alt="kakao_login"
                onClick={handleClickKakao}
              />
              <SnsLogin
                src={naverImg}
                alt="naver_login"
                onClick={handleClickNaver}
              />
            </SnsLoginImgBox>
          </SnsLoginBox>
        </LoginForm>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 800px;
`;

const LoginForm = styled.form`
  width: 400px;
  margin: 0 auto;
  padding: 240px 0;
`;

const LoginFormTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const CustomInput = styled(TextField)`
  margin: 10px 0 !important;
`;

const CustomButton = styled(Button)`
  background-color: rgb(144, 202, 249) !important;
  margin: 10px 0 !important;
`;

const SnsLoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 20px auto;
`;

const SnsLoginImgBox = styled.div`
  display: flex;
  width: 30%;
`;

const SnsLogin = styled.img`
  width: 50%;
  cursor: pointer;
  margin: 0 10px;
`;
