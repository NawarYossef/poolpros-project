import React from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  width: 100%;
  background-color: #f6f6f6;
`;
const Text = styled.p`
  padding: 24px 27px;
  text-align: left;
  font-size: 12px;
  line-height: 1.5;
`;
export const ModalFooter = props => {
  return (
    <Wrapper>
      <Text>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </Text>
    </Wrapper>
  );
};
