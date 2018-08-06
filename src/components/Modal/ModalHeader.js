import React from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  padding: 0px 15px;
  padding-bottom: 47px;
  background-color: #083d8c;
`;
const Text = styled.h6`
  float: left;
  margin: 0px;
  clear: both;
  color: #ffffff;
  font-size: 1em;
`;
const Name = styled.h2`
  display: bock;
  clear: both;
  text-align: left;
  margin: 0px;
  color: #ffffff;
`;

export const ModalHeader = props => {
  return (
    <React.Fragment>
      <i className="fas fa-times" onClick={props.onClick} />
      <Wrapper>
        <Text>EMAIL:</Text>
        <Name>{props.name}</Name>
      </Wrapper>
    </React.Fragment>
  );
};
