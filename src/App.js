import React from "react";
import styled from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";
import RichRoadLogo from "../src/img/richroad.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Head>
          <Logo src={RichRoadLogo} />
          <Profile />
        </Head>
        <Switch>
          <Route exact path="/">
            <Body>
              <LandingPage Link={Link} />
            </Body>
          </Route>
          <Route exact path="/main">
            <Body>
              <MainPage />
            </Body>
          </Route>
        </Switch>
        <Question />
      </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #141722;
  overflow: scroll;
`;

const Head = styled.div`
  flex: 0.12;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #232a3c;
`;
const Body = styled.div`
  flex: 0.88;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin: 35px;
`;
export default App;
