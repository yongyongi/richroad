import React from "react";
import styled from "styled-components";

function Mypage() {
  return (
    <Container>
      <Head>
        <Image></Image>
      </Head>
      <Body>
        <AgeContainer>
          <Info>나이</Info>
          <Input>29살</Input>
          <ModalButton>출생년도</ModalButton>
        </AgeContainer>
        <CareerContainer>
          <Info>투자경력</Info>
          <Input>3년</Input>
          <ModalButton>시작년도</ModalButton>
        </CareerContainer>
      </Body>
    </Container>
  );
}

const AgeContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;
const CareerContainer = styled.div`
  display: flex;
`;
const Info = styled.div`
  flex: 0.4;
  text-align: left;
`;
const Input = styled.div`
  flex: 0.2;
`;
const ModalButton = styled.button`
  background-color: #f7a81b;
  border: none;
  border-radius: 20px;
  color: white;
  font-weight: bolder;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: start;
  height: 100%;
`;
const Head = styled.div`
  margin-top: 50px;
  width: 80%;
  border-bottom: 2px solid white;
  padding-bottom: 40px;
`;
const Image = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: white;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 80%;
  color: white;
  font-size: 30px;
`;

export default Mypage;