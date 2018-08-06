import "normalize.css";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 0px 40px;
  padding-top: 25px;
  @media (max-width: 700px) {
    padding-top: 16px;
  }
`;
const Message = styled.p`
  margin: 0px;
  padding: 0px;
  font-style: italic;
  font-size: 12px;
`;

export const MessageForEmail = () => {
  return (
    <Wrapper>
      <Message>Can’t talk now? Click below to send an email.</Message>
    </Wrapper>
  );
};
