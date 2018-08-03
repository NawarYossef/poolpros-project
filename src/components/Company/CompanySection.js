import "normalize.css";
import React, { Component } from "react";
import { Title } from "./Title";
import { Hours } from "./Hours";
import { Phone } from "./Phone";
import { Email } from "./Email";
import { MessageForEmail } from "./MessageForEmail";
import { Services } from "./Services";
import styled from "styled-components";
import "../../styles/main.css";

const Container = styled.div`
  margin: 5px;
  position: relative;
  width: 32.2%;
  border: #d4d4d4;
  border-radius: 5px;
  -webkit-box-shadow: 0px 2px 5px 2px #e3e3e3;
  -moz-box-shadow: 0px 2px 5px 2px #e3e3e3;
  box-shadow: 0px 2px 5px 2px #e3e3e3;
  margin-bottom: 10px;
`;

export const CompanySection = props => {
  return (
    <Container>
      <Title name={props.company.name} />
      <Phone number={props.company.phone1} />
      <MessageForEmail />
      <Email
        email={props.company.email}
        handleModalButtonAndStoreCompanyId={
          props.handleModalButtonAndStoreCompanyId
        }
        companyId={props.company.companyID}
      />
      <Hours hours={props.company.weekHours} />
      <Services
        certifications={props.company.certifications}
        getServiceImg={props.getServiceImg}
      />
    </Container>
  );
};
