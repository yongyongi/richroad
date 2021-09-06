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
          나이
          <Age>29살</Age>
          <AgeButton></AgeButton>
        </AgeContainer>
        <CareerContainer>
          투자경력
          <Career>3년</Career>
          <CareerButton></CareerButton>
        </CareerContainer>
      </Body>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  flex: 1;
  height: 100%;
`;
const Head = styled.div``;
const Image = styled.div``;
const Body = styled.div``;
const AgeContainer = styled.div``;
const Age = styled.div``;
const AgeButton = styled.div``;
const CareerContainer = styled.div``;
const Career = styled.div``;
const CareerButton = styled.div``;

export default Mypage;
