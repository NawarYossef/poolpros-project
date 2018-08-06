import React from "react";
import "normalize.css";
import styled from "styled-components";
import "../../styles/main.css";

const BtnsWrapper = styled.div`
  display: block;
  text-align: left;
  padding-left: 13px;
  margin-top: 4px;
`;

const List = styled.ul`
  display: block;
  padding: 0;
  margin: 0;
`;

const Element = styled.li`
  list-style-type: none;
  list-style-position: outside;
  float: left;
  padding-right: 10px;
`;
export const PoolQuestion = props => {
  return (
    <BtnsWrapper>
      <List className="check-box-wrapper">
        <Element>
          <input
            type="checkbox"
            id="check_1"
            name="check_1"
            value="yes"
            onClick={e => props.checkBoxHandle(e)}
          />
          <label for="check_1">Yes</label>
        </Element>
        <Element>
          <input
            type="checkbox"
            id="check_2"
            name="check_2"
            value="no"
            onClick={e => props.checkBoxHandle(e)}
          />
          <label for="check_2">No</label>
        </Element>
      </List>
    </BtnsWrapper>
  );
};
