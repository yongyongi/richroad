import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import LandingPage from "../src/pages/LandingPage";
import MainPage from "../src/pages/MainPage";
import Question from "../src/components/QuestionIcon";
import RichRoadLogo from "../src/img/richroad.png";
import { auth, onAuthStateChanged } from "./firebase";
import avatar from "./img/avatar.jpg";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuModal from "./components/MenuModal";
import Mypage from "./pages/MyPage";
import SettingPage from "./pages/SettingPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
  const [userInfo, setuserInfo] = useState("");
  const [menuModal, setMenuModal] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // 로그인 했다는 표시
        setuserInfo(user); // 로그인 시 사용자 정보가 담김
        setMenuModal(false); // 로그인 후 모달창이 자동켜짐 방지
      } else {
        setIsLoggedIn(false); // 비회원상태거나 로그아웃 했을때
        setuserInfo(""); // 비회원이거나 로그아웃 했을때 기본 프로필로 이미지 변경, 그리고 회원정보 제거
      }

      setInit(true); //작업이 끝나면 로딩페이지 지우고 본페이지 나오게 하기
    });
  }, []);

  const menuModalClick = () => {
    setMenuModal((prev) => !prev);
  };

  return (
    <Router>
      <Container>
        <Head>
          <Link to="/main">
            <Logo src={RichRoadLogo} />
          </Link>
          <Profile
            onClick={menuModalClick}
            src={userInfo ? userInfo.photoURL : avatar}
          />
          {isLoggedIn && menuModal && <MenuModal setModal={setMenuModal} />}
        </Head>

        {init ? (
          <Body>
            <Switch>
              <Route exact path="/">
                <LandingPage isLoggedIn={isLoggedIn} />
              </Route>

              <Route path="/main">
                <MainPage isLoggedIn={isLoggedIn} />
              </Route>
              <Route path="/mypage">
                <Mypage userInfo={userInfo} />
              </Route>

              <Route path="/settingpage">
                <SettingPage userInfo={userInfo} />
              </Route>
              <Route>
                <ErrorPage />
              </Route>
            </Switch>
          </Body>
        ) : (
          <Body init>기다리는중!</Body>
        )}

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
