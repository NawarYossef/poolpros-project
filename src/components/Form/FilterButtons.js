import "normalize.css";
import React from "react";
import { CheckBox } from "./CheckBox";
import styled from "styled-components";
import "../../styles/main.css";

const List = styled.ul`
  height: 100%;
  width: 80%;
  display: flex;
  flex: 1;
  padding-left: 0px;
  justify-content: flex-end;
  margin-bottom: 0px;
  @media (max-width: 980px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    align-items: left;
    border: 1px solid #d8d8d8;
    box-sizing: border-box;
    width: 86%;
  }
`;

const ListElement = styled.li`
  margin-bottom: 0px;
  text-decoration: none;
  display: flex;
  align-items: center;
  @media (max-width: 980px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const Button = styled.button`
  color: #ffffff;
  padding: 0px;
  padding-right: 38px;
  margin-right: ${props => (props.lastbtn ? "0px" : "60px")};
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
            />
            {button[1]}
          </ListElement>
        );
      })}
    </List>
  );
};
