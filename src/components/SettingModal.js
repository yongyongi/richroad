import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function SettingModal({ state }) {
  const history = useHistory();
  const logOut = async () => {
    await signOut(auth);
    history.push("/main");
  };
  const modalClick = (e) => {
    console.log(">>", e.target, !e.currentTarget);
  };
  return (
    <Container onClick={modalClick} state={state}>
      <Link to="/mypage" style={{ textDecoration: "none" }}>
        <List>마이페이지</List>
      </Link>
      <List onClick={logOut}>Logout</List>
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
  background-color: #d5d5d5;
  width: 12rem;
  position: absolute;
  top: 115px;
  right: 35px;
  box-shadow: 0px 0px 5px 0px #d5d5d5;
`;

const List = styled.div`
  text-decoration: none;
  color: #151722;
  padding: 10px;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
`;

export default SettingModal;
