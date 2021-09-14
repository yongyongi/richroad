import React from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";

function PlusButton({ small }) {
  const history = useHistory();
  const onClick = () => {
    console.log("들옴");
    history.push("/settingpage");
  };
  return (
    <>
      {small ? (
        <Container>
          <Button onClick={onClick} small>
            <Line1 />
            <Line2 />
          </Button>
        </Container>
      ) : (
        <Button>
          <Line1 />
          <Line2 />
        </Button>
      )}
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.div`
  display: grid;
  margin-top: -30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #f7a81b;
  /* justify-items: center; */
  margin-bottom: 20px;
  place-items: center;
  position: relative;
  cursor: pointer;
  ${(props) =>
    props.small &&
    css`
      margin: 5px 8px 8px;
      width: 30px;
      height: 30px;
    `}
`;

const Line1 = styled.div`
  width: 50%;
  height: 10%;
  background-color: black;
  position: absolute;
`;
const Line2 = styled.div`
  width: 10%;
  height: 50%;
  background-color: black;
  position: absolute;
`;

export default PlusButton;
