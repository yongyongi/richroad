import React from "react";
import styled from "styled-components";

function Month({ information, big, settingPage }) {
  return (
    <>
      {settingPage ? (
        <SettingMonth>{information}</SettingMonth>
      ) : (
        <Container big={big && true}>{information}</Container>
      )}
    </>
  );
}
const Container = styled.div`
  margin-top: 20px;
  color: #f7a81b;
  font-size: ${(props) => (props.big ? "30px" : "20px")};
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

const SettingMonth = styled.div`
  width: 200px;
  text-align: center;
  margin-top: 20px;
  color: #f7a81b;
  font-size: 60px;
  border: 1px solid #707070;
  padding: 5px 15px;
  border-radius: 30px;
`;

export default Month;
