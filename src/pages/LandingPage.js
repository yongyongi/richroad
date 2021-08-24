import React from "react";
import styled from "styled-components";

function LandingPage() {
  return (
    <Container>
      <Text>나의 투자 수익률을 기록해보세요</Text>
      <LoginButton></LoginButton>
      <GuestButton>구경하기</GuestButton>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Text = styled.div``;
const LoginButton = styled.button``;
const GuestButton = styled.button``;

export default LandingPage;
