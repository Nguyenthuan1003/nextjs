import React from 'react'

const CustomButton = (props) => {
    const {style,label} = props
  return (
    <div>
      <button className={`btn ${style}`}>{label}</button>
    </div>
  )
}

export default CustomButton
