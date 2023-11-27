import React from 'react'

const CustomColumnsTable = (props) => {
    const {style, title} = props;
  return (
    <td className={style}>{title}</td>
  )
}

export default CustomColumnsTable
