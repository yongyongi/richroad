import React from "react";
import styled, { css } from "styled-components";

function QuestionIcon({ settingPage }) {
  return <Circle settingPage={settingPage && true}>?</Circle>;
}

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: #232a3c;
  border-radius: 50%;
  font-size: 30px;
  line-height: 60px;
  bottom: 0;
  right: 0;
  ${(props) =>
    props.settingPage &&
    css`
      font-size: 15px;
      width: 30px;
      height: 30px;
      line-height: 30px;
      top: 0px;
      right: 0px;
    `};
  cursor: pointer;
  margin: 20px;
  vertical-align: middle;
  text-align: center;

  color: #d5d5d5;
  border: 1px solid #d5d5d5;
  font-weight: bolder;
  position: absolute;
`;

export default QuestionIcon;
