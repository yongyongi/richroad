import React from "react";
import styled from "styled-components";
import Month from "../components/Month";
import QuestionIcon from "../components/QuestionIcon";

const SettingPage = () => {
  return (
    <Container>
      <Head>
        <Month information="9월" settingPage />
      </Head>
      <Body>
        <PurchaseAmount>
          <Item>
            총 매입금액
            <QuestionIcon settingPage />
          </Item>

          <Item input>
            <Input />
          </Item>
        </PurchaseAmount>
        <EvaluationAmount>
          <Item>
            총 평가금액
            <QuestionIcon settingPage />
          </Item>

          <Item input>
            <Input />
          </Item>
        </EvaluationAmount>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: start;
`;
const Head = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 50%;
`;
const Body = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
const PurchaseAmount = styled.div`
  flex: 0.35;
  position: relative;
`;
const EvaluationAmount = styled.div`
  flex: 0.35;
  position: relative;
`;
const Item = styled.div`
  text-align: center;
  background-color: ${(props) => (props.input ? "white" : "#232a3c")};
  padding: ${(props) => (props.input ? "30px" : "60px")};
  border-radius: ${(props) =>
    props.input ? "0px 0px 50px 50px" : "50px 50px 0px 0px"};
`;
const Input = styled.input`
  padding: 30px;
  outline: none;
  border: none;
`;

export default SettingPage;
