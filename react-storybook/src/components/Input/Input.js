import React from 'react';
import './Input.css';

const Input = (props) => {
  const { variant = 'small',...rest} = props;
  return (
    <input className={`input ${variant}`} {...rest}/>
  )
}

export default Input