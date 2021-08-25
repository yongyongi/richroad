import React from "react";
import styled from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";

function App() {
  return (
    <Container>
      <MainPage />
      {/* <LandingPage /> */}
      <Question />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #141722;
`;
export default App;
