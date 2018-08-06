import "normalize.css";
import React from "react";
import { CheckBox } from "./CheckBox";
import styled from "styled-components";
import "../../styles/main.css";

const List = styled.ul`
  background-color: #ffffff;
  flex: 1;
  margin-bottom: 0px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border: 1px solid #d8d8d8;
  margin-top: -1px;
  box-sizing: border-box;
  width: 86%;
  height: 100%;
  @media (min-width: 981px) {
    display: none;
  }
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 0px;
  padding-right: 38px;
`;

export const DropDownButtons = props => {
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
              checked={props.checkBoxValues.includes(button[1]) ? true : false}
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
