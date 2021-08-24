import React from "react";
import styled from "styled-components";
import LandingPage from "../src/pages/LandingPage";

function App() {
  return (
    <Container>
      <LandingPage />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
`;
export default App;
