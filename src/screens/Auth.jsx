import React, { useEffect, useState } from 'react'
import Login from '../components/Login/Login'
import { useSelector } from 'react-redux'
import Dashboard from './Dashboard'
const Auth = () => {

  const {userInfo} = useSelector((state) => state.user)



 
console.log("test");

  if (userInfo.token) {
    return (
      <div>
          <Dashboard />
      </div>
    )
  }else{
    return (
      <div>
          <Login />
      </div>
    )
  }
}

export default Auth