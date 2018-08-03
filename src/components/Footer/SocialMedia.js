import "normalize.css";
import React from "react";
import { Link } from "react-router-dom";
import TwitterImg from "../../assets/twitter-icon.png";
import YoutubeImg from "../../assets/youtube-icon.png";
import FacebookImg from "../../assets/facebook-icon.png";
import styled from "styled-components";
import "../../styles/main.css";

const Wrapper = styled.div`
  width: 17%;
  margin: 0 auto;
  padding: 0px !important;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
`;

const NavMenu = styled.ul`
  width: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0px;
  margin: 0px;
  padding-bottom: 31px;
  align-items: space-between;
`;
const Text = styled.h5`
  margin: 0px;
  color: #ffffff;
`;
const Element = styled.li`
  list-style: none;
`;
export const SocialMedia = () => {
  const links = [
    <Link to={"/twitter"}>
      <img src={TwitterImg} className={"footer-icon"} alt="" />
    </Link>,
    <Link to={"/facebook"}>
      <img src={FacebookImg} className={"footer-icon"} alt="" />
    </Link>,
    <Link to={"/youtube"}>
      <img src={YoutubeImg} className={"footer-icon"} alt="" />
    </Link>
  ];
  return (
    <Wrapper>
      <Text>CONNECT WITH US</Text>
      <NavMenu>
        {links.map((link, idx) => {
          return (
            <Element key={idx.toString()} className="link">
              {link}
            </Element>
          );
        })}
      </NavMenu>
    </Wrapper>
  );
};
