import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="auth">
      <div className="auth-child">

        <h1>Login</h1>

        <label>Username</label>
        <div className="uspass">
          <LuUser className="icon" />
          <input type="text" placeholder="Enter username" />
        </div>

        <label>Password</label>
        <div className="uspass">
          <MdLockOutline className="icon" />
          <input type="password" placeholder="Enter password" />
        </div>

        <p className="forgot">Forgot Password?</p>

        <button>Login</button>

      </div>
    </div>
  )
}

export default Login;
