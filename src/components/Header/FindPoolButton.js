import "normalize.css";
import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/location-icon.png";
import styled from "styled-components";
import "../../styles/main.css";

const LocationButtonWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  border: 1px solid #083d8c;
  color: #083d8c !important;
  background-color: transparent;
  margin-left: auto;
  padding: 10px 20px;
  border-radius: 3px;
  box-sizing: border-box;
`;
export const FindPoolButton = () => {
  return (
    <LocationButtonWrapper className="find-pool-wrapper">
      <img src={LocationIcon} className={"location-icon"} alt="img"/>
      <Link to={"/find-pool-pro"} className={"find-pool-btn"}>
        Find a Pool Pro
      </Link>
    </LocationButtonWrapper>
  );
};
