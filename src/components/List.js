import React from "react";
import styled from "styled-components";
import Month from "../components/Month";

function List() {
  return (
    <Container>
      <Name>김승용</Name>
      <Age>29</Age>
      <Investment>
        투자금
        <Month />
      </Investment>
      <CurrentValue>
        현재가치
        <Month />
      </CurrentValue>
      <EarningsRate>
        <Triangle />
        2.78%
      </EarningsRate>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #f7a81b;
  border-radius: 30px;
  width: 400px;
  padding: 5px 20px;
`;
const Name = styled.div`
  color: #d5d5d5;
`;
const Age = styled.div`
  color: #d5d5d5;
`;
const Investment = styled.div`
  color: #d5d5d5;
`;
const CurrentValue = styled.div`
  color: #d5d5d5;
`;
const EarningsRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
`;
const Triangle = styled.div`
  margin: 0 5px;
  width: 0px;
  height: 0px;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 15px solid red;
`;

export default List;
