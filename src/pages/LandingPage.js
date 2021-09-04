import React from "react";
import styled from "styled-components";
import google from "../img/google.png";
import { auth, GoogleAuthProvider, signInWithPopup } from "../firebase";
import { Link, useHistory } from "react-router-dom";

function LandingPage({ isLoggedIn }) {
  const history = useHistory();
  const googleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
    history.push("/main");
  };
  return (
    <Container>
      <Text>
        나의 투자 수익률을
        <br />
        기록해보세요
      </Text>
      {isLoggedIn ? (
        <Link to="/main">
          <GuestButton>기록하기</GuestButton>
        </Link>
      ) : (
        <>
          <LoginButton onClick={googleLogin} src={google} />
          <Link to="/main">
            <GuestButton>구경하기</GuestButton>
          </Link>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Text = styled.p`
  margin-top: -100px;
  font-size: 80px;
  text-align: center;
  color: #d5d5d5;
`;
const LoginButton = styled.img`
  object-fit: contain;
  width: 250px;
  cursor: pointer;
`;
const GuestButton = styled.button`
  margin: 20px;
  background-color: #f7a81b;
  border: none;
  width: 250px;
  height: 5vh;
  border-radius: 10px;
  font-size: 20px;
  object-fit: contain;
  cursor: pointer;
  color: white;
  font-weight: bolder;
`;

export default LandingPage;
