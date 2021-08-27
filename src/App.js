import React from "react";
import styled from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";
import RichRoadLogo from "../src/img/richroad.png";

function App() {
  return (
    <Container>
      {/* <LandingPage /> */}
      <Head>
        <Logo src={RichRoadLogo} />
        <Profile />
      </Head>
      <Body>
        <MainPage />
      </Body>
      <Question />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #141722;
  overflow: scroll;
`;

const Head = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #232a3c;
`;
const Body = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-top: -30px;
`;

const Logo = styled.img`
  width: 200px;
`;
const Profile = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  margin: 50px;
`;
export default App;
