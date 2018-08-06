import "normalize.css";
import React from "react";
import styled from "styled-components";
import "../../styles/main.css";

const Container = styled.div`
  height: 100px;
  background-color: #f6f6f6;
`;
const Wrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 25px 10px; 
  margin-top: 25px;
  @media (max-width: 700px) {
    margin-top: 16px;
  }
  @media (max-width: 330px) {
    padding: 25px 4px;
  }
`;

const ElementWrapper = styled.li`
  flex: 0 0 49%;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  flex-direction: row;
  list-style-type: none;
  font-size: 12px;
  margin-top: 11px;
`;

export const Services = props => {
  return (
    <Container>
      <Wrapper>
        {props.certifications.map((service, idx) => {
          let imgSrc = service.split(" ").join("-");
          return (
            <ElementWrapper className={"service-flex-item"} key={idx.toString()}>
              <img
                src={require(`../../assets/${imgSrc}.png`)}
                className={"service-img"}
                alt="img"
              />
              {service}
            </ElementWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
};
