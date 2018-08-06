import React from "react";
import { CompanySection } from "./Company/CompanySection";
import "normalize.css";
import styled from "styled-components";
import "../styles/main.css";

const Results = styled.section`
  max-width: 100%;
  margin: 50px auto 50px auto;
`;
const Wrapper = styled.div`
  max-width: 95%;
  position: relative;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
  @media (min-width: 1025px) {
    max-width: 95%;
  }
`;

export const SearchResults = props => {
  return (
    <Results>
      <Wrapper>
        {props.data &&
          props.data.map((company, idx) => (
            <CompanySection
              key={idx.toString()}
              company={company.data}
              handleModalButtonAndStoreCompanyId={
                props.handleModalButtonAndStoreCompanyId
              }
            />
          ))}
      </Wrapper>
    </Results>
  );
};
