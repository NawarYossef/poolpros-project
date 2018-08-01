import 'normalize.css';
import React from 'react';
import ToolTipIcon from '../assets/tool-tip-icon-filtering.png'
import '../styles/main.css';


export const TooTip = () => {
  return (
    <img src={ToolTipIcon} className={'tool-tip-img'} alt="" />
  );
}