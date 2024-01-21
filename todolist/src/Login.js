import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './Login.css'
const Login = ({name,pass,onChangeFunction1,onChangeFunction2,loginFunction}) => {
    const navigate=useNavigate()

  return (
    <div className='loginBody'>
        <h1 className='loginTitle'>Login</h1>
        <form onSubmit={(e)=>loginFunction(e,navigate)}>
            <input onChange={(e)=>onChangeFunction1(e)}  className='inputBar' placeholder='Enter Username' autoComplete='off' value={name}/><br></br>
            <input onChange={(e)=>onChangeFunction2(e)} className='inputBar' placeholder='Enter Password' autoComplete='off' value={pass}/><br></br>
            <button className='regButton'>Login</button>
        </form>
        <h5>Don't have an account?
        <span><Link to='/Register'> Register Now</Link></span></h5>
    </div>
  )
}

export default Login
