import React from 'react'
import './customInput.css';

const CustomInput = (props) => {
    const {label,type} = props;
  return (
     <input placeholder={label} type={type} className={"input-login"}/>
  )
}

export default CustomInput
