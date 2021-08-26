import React from "react";
import styled from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";

function App() {
  return (
    <Container>
      {/* <LandingPage /> */}
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
`;

const Body = styled.div`
  display: flex;
`;
export default App;
