import React from 'react'

const CustomTitleTable = (props) => {
    const {style, title} = props
  return (
    <th className={style}>{title}</th>
  )
}

export default CustomTitleTable
