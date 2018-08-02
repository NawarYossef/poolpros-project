import 'normalize.css';
import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/main.css';


const Container = styled.div`
height: 100px;
background-color: #f6f6f6;
`
const Wrapper = styled.ul`
display:flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
margin: 0 auto;
padding-top: 26px;
padding-bottom: 31px;
margin-top: 38px;
`

const ElementWrapper = styled.li`
width: 50%;
display:flex;
flex-flow: wrap;
align-items: center;
flex-direction: row;
list-style-type: none;
font-size: 12px;
margin-top: 11px;
`
const CompanyName = styled.h1``
export const Services = props => {
  return (
    <Container>
      <Wrapper>
        {props.certifications.map(service => {
          let imgSrc = service.split(' ').join('-');
          return (
            <ElementWrapper className={"service-flex-item"}>
              <img src={require(`../../assets/${imgSrc}.png`)} className={'service-img'} />
              {service}
            </ElementWrapper>
          )
        })}
      </Wrapper>
    </Container>
  );
}
