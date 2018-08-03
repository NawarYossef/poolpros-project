import "normalize.css";
import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  text-align: center;
  padding: 0px 40px;
  padding-top: 33px;
`;

const Message = styled.h5`
  margin: 0px;
  padding: 0px;
  padding-bottom: 9px;
  font-weight: bold;
`;

const HoursCount = styled.p`
  margin: 0px;
  padding: 0px;
  padding-top: 6px;
  font-size: 12px;
`;
export const Hours = props => {
  return (
    <Wrapper>
      <Message>Business Hours</Message>
      <HoursCount>Weekdays {props.hours.fri}</HoursCount>
      <HoursCount>
        Saturdays {props.hours.sat ? props.hours.sat : "CLOSED"}
      </HoursCount>
      <HoursCount>
        Sundays - {props.hours.sun ? props.hours.sun : "CLOSED"}
      </HoursCount>
    </Wrapper>
  );
};
