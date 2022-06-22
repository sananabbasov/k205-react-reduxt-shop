import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderTable from '../components/OrderTable/OrderTable'
import { getUserAction } from '../redux/Actions/UserAction'

const Dashboard = () => {

  const { userInfo } = useSelector((state) => state.user)

  const dispach = useDispatch()

  useEffect(() => {
    dispach(getUserAction())
  }, [])

  console.log("Dahsboard", userInfo);
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                {userInfo.fullName}
              </h5>
              <span>Email</span>
              <p>{userInfo.email}</p>
            </div>
            <div className="card-footer">
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <OrderTable />
        </div>
      </div>
    </div>
  )
}

export default Dashboard