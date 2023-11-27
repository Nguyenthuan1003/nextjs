import React from 'react';
import { MdOutlineDeviceHub } from "react-icons/md";

const Navigation = () => {
  return (
    <div>
      <h1 className={"text-gray-500"}>
        <MdOutlineDeviceHub className={"font-bold"}/>
        Devices Manager
      </h1>
    </div>
  )
}

export default Navigation
