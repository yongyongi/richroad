import React from "react";
import styled from "styled-components";

function QuestionIcon() {
  return <Circle>?</Circle>;
}

const Circle = styled.div`
  cursor: pointer;
  margin: 20px;
  background-color: #232a3c;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #d5d5d5;
  border: 1px solid #d5d5d5;
  font-weight: bolder;
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default QuestionIcon;
