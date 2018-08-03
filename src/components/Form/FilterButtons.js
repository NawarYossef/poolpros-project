import "normalize.css";
import React from "react";
import { CheckBox } from "./CheckBox";
import styled from "styled-components";
import "../../styles/main.css";

const List = styled.ul`
  height: 100%;
  display: flex;
  flex: 1;
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
  margin-right: ${props => (props.lastbtn ? "0px" : "60px")};
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

export const FilterButtons = props => {
  const buttonsArr = [
    [<Button>Service</Button>, "Service Pro"],
    [<Button>Installation</Button>, "Installation Pro"],
    [<Button>Residential</Button>, "Residential Pro"],
    [<Button className={"check-box-btn-last"}>Commercial</Button>, "Commercial Pro"]
  ];

  return (
    <List>
      {buttonsArr.map((button, idx) => {
        return (
          <ListElement key={idx.toString()} className="link">
            <CheckBox
              handleInputChange={props.handleInputChange}
              boxName={button[button.length - 1]}
            />
            {button[1]}
          </ListElement>
        );
      })}
    </List>
  );
};
