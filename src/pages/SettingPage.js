import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import React, { useState } from "react";
import styled from "styled-components";
import QuestionIcon from "../components/QuestionIcon";
import ErrorPage from "../components/ErrorPage";

const SettingPage = ({ userInfo }) => {
  const max = 9999999999999;
  const [purchase, setPurchase] = useState("");
  const [evaluation, setEvaluation] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const rate = (evaluation / purchase) * 100;
    await addDoc(collection(db, "users"), {
      createdAt: new Date().toLocaleString(),
      creatorId: userInfo.uid,
      asset: [
        new Date().getMonth() + 1,
        "nick",
        "age",
        purchase,
        evaluation,
        rate,
      ],
    });
    setPurchase("");
    setEvaluation("");
  };
  const onChange = (e) => {
    const {
      target: { value, name },
    } = e;
    if (name === "evaluation") {
      setEvaluation(value);
    } else {
      setPurchase(value);
    }
  };
  return (
    <>
      {userInfo ? (
        <Container>
          <Head>
            <Month>9월</Month>
          </Head>
          <Body>
            <Form onSubmit={onSubmit}>
              <PurchaseAmount>
                <Item>
                  총 매입금액
                  <QuestionIcon settingPage />
                </Item>
                <InputContainer>
                  <Input
                    onChange={onChange}
                    name="purchase"
                    type="number"
                    max={max}
                    required
                    value={purchase}
                  />
                </InputContainer>
              </PurchaseAmount>

              <EvaluationAmount>
                <Item>
                  총 평가금액
                  <QuestionIcon settingPage />
                </Item>
                <InputContainer>
                  <Input
                    onChange={onChange}
                    name="evaluation"
                    type="number"
                    max={max}
                    required
                    value={evaluation}
                  />
                </InputContainer>
              </EvaluationAmount>
              <Submit type="submit" />
            </Form>
          </Body>
        </Container>
      ) : (
        <ErrorPage />
      )}
    </>
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

const Month = styled.div`
  width: 200px;
  text-align: center;
  margin-top: 20px;
  color: #f7a81b;
  font-size: 60px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
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
const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  background-color: #232a3c;
  padding: 60px;
  border-radius: 50px 50px 0px 0px;
`;
const Input = styled.input`
  font-size: 30px;
  height: 80px;
  text-align: center;
  font-weight: bolder;
  outline: none;
  border: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const InputContainer = styled.div`
  text-align: center;
  background-color: white;
  padding: 35px;
  border-radius: 0px 0px 50px 50px;
`;

const Submit = styled.input`
  display: none;
`;

export default SettingPage;
