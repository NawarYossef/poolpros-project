import 'normalize.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckBox } from './CheckBox';
import styled from 'styled-components';
import '../styles/main.css';
import { TooTip } from './ToolTip';

const ButtonsSectionWrapper = styled.div`
  flex: auto;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 31px 0px;
`;
const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-end;
`;

const List = styled.ul`
  flex: 1;
  height: 100%;
  display: flex;
  padding-left: 0px;
  justify-content: flex-end;
  list-style-type: none;
  margin-bottom: 0px;
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #ffffff;
  font-size: 1.3em !important;
  padding: 0px;
  padding-right: 38px;
  margin-right: ${props => props.lastbtn ? '0px' : '60px'};
  &:hover {
    color: #d9d9d9;
    text-decoration: none;
  }

  @media (min-width: 320px) {
    font-size: 1em !important;
  }
  @media (min-width: 425px) {
    font-size: 1em !important;
  }
`;

export const FilterButtons = () => {
  const buttons = [
    <Button>Service</Button>,
    <Button>Installation</Button>,
    <Button>Residential</Button>,
    <Button className={"check-box-btn-last"}>Commercial</Button>,
  ];

  return (
    <ButtonsSectionWrapper className={"filter-btns-wrapper"}>
      <InnerWrapper>
        <List>
          {buttons.map((button, idx) => {
            return (
              <ListElement key={idx.toString()} className="link">
                <CheckBox />
                {button}
              </ListElement>
            );
          })}
          <TooTip />
        </List>
      </InnerWrapper>
    </ButtonsSectionWrapper>
  );
}