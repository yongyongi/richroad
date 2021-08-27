import React from "react";
import styled from "styled-components";

function Money() {
  return <Container>2000만원</Container>;
}

const Container = styled.div`
  color: #f7a81b;
  font-size: 15px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

export default Money;
