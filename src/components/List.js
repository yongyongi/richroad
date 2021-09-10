import React from "react";
import styled from "styled-components";

function List({ month }) {
  return (
    <Container>
      {month ? (
        <Month>{month}</Month>
      ) : (
        <>
          <Name>김승용</Name>
          <Age>29</Age>
        </>
      )}

      <Investment>
        <Text>투자금</Text>
        <Amount>2000만원</Amount>
      </Investment>
      <CurrentValue>
        <Text>현재가치</Text>
        <Amount>3000만원</Amount>
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
  padding: 10px 40px;
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

const Month = styled.div`
  font-size: 20px;
  font-weight: bolder;
  color: #d5d5d5;
`;
const Amount = styled.div`
  color: #f7a81b;
  font-size: 15px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

export default List;
