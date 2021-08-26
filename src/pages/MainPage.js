import React from "react";
import styled, { css } from "styled-components";
import google from "../img/google.png";
import List from "../components/List";
import Month from "../components/Month";

function MainPage() {
  return (
    <Container>
      <Block left>
        <Head>다른 유저의 수익률</Head>
        <Month />
        <LeftBody>
          <List />
        </LeftBody>
      </Block>
      <Block right>
        <Head right>내 주식 기록</Head>
        <RightBody>
          <Notice>
            로그인이
            <br /> 필요한 서비스입니다.
          </Notice>
          <Login src={google}></Login>
        </RightBody>
      </Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 600px;
  height: 800px;
  background-color: #232a3c;
  margin: 30px;
`;

const Head = styled.p`
  margin-bottom: 0px;
  ${(props) =>
    props.right &&
    css`
      margin-bottom: 50px;
    `}
  color: #d5d5d5;
  font-size: 50px;
  font-weight: bolder;
`;

const RightBody = styled.div`
  margin-top: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;

  text-align: center;
`;
const Notice = styled.p`
  color: #d5d5d5;
  font-size: 30px;
  font-weight: bolder;
`;
const Login = styled.img`
  padding-top: 30px;
  width: 250px;
  cursor: pointer;
`;

const LeftBody = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export default MainPage;
