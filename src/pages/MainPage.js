import React from "react";
import styled, { css } from "styled-components";

function MainPage() {
  return (
    <Container>
      <Contents>
        <Block left />
        <Block right />
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
const Contents = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Block = styled.div`
  ${(props) =>
    props.left
      ? css`
          margin-right: 80px;
        `
      : css`
          margin-left: 80px;
        `}
  border-radius: 15px;
  width: 600px;
  height: 800px;
  background-color: #232a3c;
`;

export default MainPage;
