import React, { useState } from 'react'

const Login = () => {
  
  const [curState,setCurState] = useState("Sign Up");
  
  return (
    <div>
      <form className="login"></form>
      <div className='login-popup-title'>
        <h2>{curState}</h2>
      </div>
    </div>
  )
}

export default Login
