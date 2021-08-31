import React from "react";
import styled, { css } from "styled-components";
import google from "../img/google.png";
import List from "../components/List";
import Month from "../components/Month";
import PlusButton from "../components/PlusButton";

function MainPage() {
  return (
    <Container>
      <Block left>
        <Head>다른 유저의 수익률</Head>
        <Month imformation="월" big />
        <LeftBody>
          <List />
          <List />
          <List />
          <List />
        </LeftBody>
      </Block>
      <Block right>
        <Head right>내 주식 기록</Head>
        {1 !== 1 ? ( //로그인이 되었는지 안되었는지
          //로그인이 안된경우
          <RightBodyFree>
            <Notice>
              로그인이
              <br /> 필요한 서비스입니다.
            </Notice>
            <Login src={google}></Login>
          </RightBodyFree>
        ) : //로그인이 된경우
        1 !== 1 ? ( //로그인ok, 데이터 있는지 없는지
          //데이터가 없다면
          <RightBodyNotData>
            <PlusButton />
            등록하기
          </RightBodyNotData>
        ) : (
          //데이터가 있다면
          <RightBodyData>
            <Top>
              <Month imformation="이름" />
              <Month imformation="나이" />
              <Month imformation="경험" />
            </Top>
            <PlusButton small />
            <List month="9월" />
          </RightBodyData>
        )}
      </Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
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

  color: #d5d5d5;
  font-size: 50px;
  font-weight: bolder;
`;

const RightBodyFree = styled.div`
  margin-top: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;

  text-align: center;
`;
const RightBodyNotData = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
  justify-items: center;
  color: white;
  font-weight: bolder;
  font-size: larger;
  text-align: center;
`;

const RightBodyData = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-around;
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
