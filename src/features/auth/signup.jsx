import React from 'react'
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

const Signup = () => {
  return (
    <div className="auth">
      <div className="auth-child">

        <h1>Signup</h1>

        <label>Username</label>
        <div className="uspass">
          <LuUser className="icon" />
          <input type="text" placeholder="Enter username" />
        </div>

        <label>Email</label>
        <div className="uspass">
          <MdOutlineMail className="icon"/>
          <input type="text" placeholder="Enter email" />
        </div>

        <label>Password</label>
        <div className="uspass">
          <MdLockOutline className="icon" />
          <input type="password" placeholder="Enter password" />
        </div>

        {/* <p className="forgot">Forgot Password?</p> */}

        <button>Signup</button>

      </div>
    </div>
  )
}

export default Signup;
