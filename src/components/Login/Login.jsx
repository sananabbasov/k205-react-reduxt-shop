import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../redux/Actions/UserAction'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispach = useDispatch()

  const loginHandler = () => {
    dispach(loginUserAction(email,password))
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">
                Login
              </h4>
            </div>
            <div className="card-footer">
              <div>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} className='form-control' type="text" />
              </div>
              <div>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} className='form-control' type="password" />
              </div>
              <div className='my-2'>
                <button onClick={() => loginHandler()} className='btn btn-outline-success'>Daxil ol</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login