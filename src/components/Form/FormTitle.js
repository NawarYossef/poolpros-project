import FontAwesome from "react-fontawesome";
import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 980px) {
    flex: 0 0 50%;
    height: 40px;
  }
  @media (min-width: 981px) {
    display: none;
  }
`;
const ColumnTitle = styled.button`
  height: 100%;
  width: 80%;
  border: 1px solid #d8d8d8;
  color: rgb(0, 0, 0);
  background: #ffffff;
  flex: 0 0 80%;
  padding: 0px;
`;
const Title = styled.button`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: transparent;
  border: none;
  @media (max-width: 980px) {
    display: none;
  }
`;
const Arrow = styled(FontAwesome)`
  flex: 0 0 20%;
  border: 1px solid #d8d8d8;
  border-left: none;
  height: 100%;
  box-sizing: border-box;
  line-height: 2.5;
  background-color: #f6f6f6;
`;
export const FormTitle = props => {
  return (
    <React.Fragment>
      <Wrapper>
        <ColumnTitle onClick={() => props.handleDropDownMenu()}>
          Filter Results
        </ColumnTitle>
        <Arrow
          name="caret-down"
          onClick={() => props.handleDropDownMenu()}
          className="drop-down-caret"
        />
      </Wrapper>
      <Title>Filter Results </Title>
    </React.Fragment>
  );
};
