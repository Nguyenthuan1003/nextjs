import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const Login = () => {
  return (
    <div className={"py-8 px-20 max-w-lg shadow-xl"} style={{ margin: "25vh auto"}}>
      <form action="">
        <h1 className={"font-bold text-lg text-gray-400"}>SOIOT SYSTEM</h1>
        <div>
          <CustomInput label="Full name" type="text" />
        </div>
        <div>
          <CustomInput label="Password" type="password" />
        </div>
        <div className={"flex justify-evenly items-center "}>
          <CustomButton label="Login" style="bg-yellow-400 px-8 py-2 text-white font-bold rounded-2xl shadow-md"/>
          <a className="text-blue-600" href="#">or create a new account</a>
        </div>
      </form>
    </div>
  )
}

export default Login

