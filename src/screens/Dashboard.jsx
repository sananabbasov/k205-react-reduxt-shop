import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAction } from '../redux/Actions/UserAction'

const Dashboard = () => {

  const {userInfo} = useSelector((state) => state.user)

  const dispach = useDispatch()

  useEffect(() =>{
    dispach(getUserAction())
  },[])

  console.log("Dahsboard",userInfo);
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard