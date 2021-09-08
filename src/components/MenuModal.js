import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function MenuModal({ state, setState }) {
  const history = useHistory();
  const overLay = useRef();
  const logOut = async () => {
    await signOut(auth);
    history.push("/main");
    setState(false);
  };
  const modalOutClick = (e) => {
    if (e.target === overLay.current) setState(false);
  };

  const myPage = () => {
    history.push("/mypage");

    setState(false);
  };
  return (
    <Container state={state}>
      <OverLay onClick={modalOutClick} ref={overLay} />
      <ModalBox>
        <List onClick={myPage}>마이페이지</List>
        <List onClick={logOut}>Logout</List>
      </ModalBox>
    </Container>
  );
}

const Container = styled.div`
  display: ${(props) => (props.state ? "block" : "none")};
`;
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
