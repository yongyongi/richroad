import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";
import RichRoadLogo from "../src/img/richroad.png";
import { auth, onAuthStateChanged } from "./firebase";
import avatar from "./img/avatar.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//로그인 되어있으면 메인페이지로 이동
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userInformation, setUserInformation] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserInformation(user.photoURL);
      } else setIsLoggedIn(false);

      setInit(true);
    });
  }, []);

  return (
    <Router>
      <Container>
        <Head>
          <Link to="/main">
            <Logo src={RichRoadLogo} />
          </Link>
        </Head>
        <Switch>
          {init ? (
            <Body>
              <Route exact path="/">
                <LandingPage isLoggedIn={isLoggedIn} />
              </Route>

              <Route exact path="/main">
                <Profile src={userInformation ? userInformation : avatar} />
                <MainPage isLoggedIn={isLoggedIn} />
              </Route>
            </Body>
          ) : (
            <Body init>기다리는중!</Body>
          )}
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
  ${(props) =>
    props.init &&
    css`
      color: white;
      font-size: 80px;
    `}
`;

const Logo = styled.img`
  width: 200px;
`;
const Profile = styled.img`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  margin: 35px;
  box-shadow: 0px 0px 5px 0px #d5d5d5;
  cursor: pointer;
`;
export default App;
