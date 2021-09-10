import React from "react";
import styled from "styled-components";
import google from "../img/google.png";
import List from "../components/List";
import PlusButton from "../components/PlusButton";
import { GoogleAuthProvider, signInWithPopup, auth } from "../firebase";

function MainPage({ isLoggedIn }) {
  const googleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };
  return (
    <Container>
      <Block left>
        <Head>
          <Title>다른 유저의 수익률</Title>
        </Head>
        <LeftBody>
          <MonthContainer>
            <Month>월</Month>
          </MonthContainer>
          <List />
          <List />
          <List />
          <List />
        </LeftBody>
      </Block>
      <Block right>
        <Head>
          <Title>내 주식 기록</Title>
        </Head>
        {!isLoggedIn ? ( //로그인이 되었는지 안되었는지
          //로그인이 안된경우
          <RightBodyFree>
            <LoginContainer>
              <Notice>
                로그인이
                <br /> 필요한 서비스입니다.
              </Notice>
              <Login onClick={googleLogin} src={google}></Login>
            </LoginContainer>
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
            <InfoContainer>
              <Info>이름</Info>
              <Info>나이</Info>
              <Info>투자경험</Info>
            </InfoContainer>
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
  padding: 20px;
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 0px;
  color: #d5d5d5;
  font-size: 50px;
  font-weight: bolder;
`;

const RightBodyFree = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  margin-top: -50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Info = styled.div`
  width: fit-content;
  text-align: center;
  margin-top: 20px;
  color: #f7a81b;
  font-size: 20px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;
const Notice = styled.div`
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
`;

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;
const Month = styled.div`
  width: fit-content;
  text-align: center;
  margin-top: 20px;
  color: #f7a81b;
  font-size: 30px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

export default MainPage;
