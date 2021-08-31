import React from "react";
import styled from "styled-components";

function Month({ imformation, big }) {
  return (
    <>
      {big ? (
        <Container big>{imformation}</Container>
      ) : (
        <Container>{imformation}</Container>
      )}
    </>
  );
}
const Container = styled.span`
  margin-top: 20px;
  color: #f7a81b;
  font-size: ${(props) => (props.big ? "30px" : "20px")};
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

export default Month;
