import React from "react";
import styled from "styled-components";
import Money from "../components/Money";

function List() {
  return (
    <Container>
      <Name>김승용</Name>
      <Age>29</Age>
      <Investment>
        <Text>투자금</Text>
        <Money />
      </Investment>
      <CurrentValue>
        <Text>현재가치</Text>
        <Money />
      </CurrentValue>
      <EarningsRate>
        <Triangle />
        2.78%
      </EarningsRate>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3px solid #f7a81b;
  border-radius: 50px;
  width: 500px;
  padding: 10px 20px;
  margin-bottom: 8px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: #d5d5d5;
`;
const Age = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: #d5d5d5;
`;
const Investment = styled.div`
  color: #d5d5d5;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
`;
const CurrentValue = styled.div`
  color: #d5d5d5;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* position: relative; */
`;
const Text = styled.div`
  size: 18px;
  font-weight: bolder;
  /* position: absolute;
  top: -18px;
  right: 25px; */
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
