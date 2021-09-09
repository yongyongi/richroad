import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function MenuModal({ setModal }) {
  const history = useHistory();

  const logOut = async () => {
    await signOut(auth);
    history.push("/main");
    setModal(false);
  };
  const modalOutClick = () => {
    setModal(false);
  };

  const myPage = () => {
    history.push("/mypage");
    setModal(false);
  };

  const settingPage = () => {
    history.push("/settingpage");
    setModal(false);
  };
  return (
    <Container>
      <OverLay onClick={modalOutClick} />
      <ModalBox>
        <List onClick={myPage}>마이페이지</List>
        <List onClick={settingPage}>자산기록하기</List>
        <List onClick={logOut}>로그아웃</List>
      </ModalBox>
    </Container>
  );
}

const Container = styled.div``;
const ModalBox = styled.div`
  position: fixed;
  background-color: #d5d5d5;
  width: 12rem;
  top: 115px;
  right: 35px;
  box-shadow: 0px 0px 5px 0px #d5d5d5;
`;
const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const List = styled.div`
  text-decoration: none;
  color: #151722;
  padding: 10px;
  line-height: 1.5;
  font-weight: 500;
  cursor: pointer;
`;

export default MenuModal;
