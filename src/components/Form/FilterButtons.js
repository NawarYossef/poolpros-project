import "normalize.css";
import React from "react";
import { CheckBox } from "./CheckBox";
import styled from "styled-components";
import "../../styles/main.css";

const List = styled.ul`
  height: 100%;
  max-width: 100%;
  display: flex;
  padding-left: 0px;
  justify-content: flex-start;
  margin-bottom: 0px;
  @media (max-width: 980px) {
    display: none;
  }
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  color: #ffffff;
  padding: 0px;
  padding-right: 38px;
  margin-right: 0px;
  &:hover {
    color: #d9d9d9;
    text-decoration: none;
  }
`;

export const FilterButtons = props => {
  const buttonsArr = [
    [<Button>Service</Button>, "Service Pro"],
    [<Button>Installation</Button>, "Installation Pro"],
    [<Button>Residential</Button>, "Residential Pro"],
    [
      <Button className={"check-box-btn-last"}>Commercial</Button>,
      "Commercial Pro"
    ]
  ];

  return (
    <List>
      {buttonsArr.map((button, idx) => {
        return (
          <ListElement key={idx.toString()} className="link">
            <CheckBox
              handleInputChange={props.handleInputChange}
              boxName={button[button.length - 1]}
              checked={props.checkBoxValues.includes(button[1]) ? true : false}
            />
            {button[1]}
          </ListElement>
        );
      })}
    </List>
  );
};
