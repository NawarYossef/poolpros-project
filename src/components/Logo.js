import React from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { Link } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-dom';
import PoolProsLogo from '../assets/pool-pros-logo.png'
import 'normalize.css';
import styled from 'styled-components';


const WrapperForAppTitle = styled(Link)`
flex: auto;
display: flex;
align-items: center;  
text-align: initial;
&:hover {
  text-decoration: none;
}
`;  


export const Logo = () => {
  return (
    <WrapperForAppTitle to={"/"}>
      <img src={PoolProsLogo} className={'app-logo'} alt="" />
    </WrapperForAppTitle>
  );
}