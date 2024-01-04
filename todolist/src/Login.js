import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const Login = ({name,pass,onChangeFunction1,onChangeFunction2,loginFunction}) => {
    const navigate=useNavigate()

  return (
    <div>
        <h1 style={{color:'rgb(128, 188, 189)'}}>Login</h1>
        <form onSubmit={(e)=>loginFunction(e,navigate)}>
            <input onChange={(e)=>onChangeFunction1(e)}  className='inputBar' placeholder='Enter Username' value={name}/><br></br>
            <input onChange={(e)=>onChangeFunction2(e)} className='inputBar' placeholder='Enter Password' value={pass}/><br></br>
            <button className='regButton'>Login</button>
        </form>
        <h5>Not have an account?
        <span><Link to='/Register'> Register Now</Link></span></h5>
    </div>
  )
}

export default Login
