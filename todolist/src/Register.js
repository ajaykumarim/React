import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './Register.css'
const Register = () => {
    // const [userName,setUserName]=useState('')
    // const [userPass,setUserPass]=useState('')
    const [obj,setObj]=useState({
        username:'',
        password:''
    })
    let localDatas=JSON.parse(localStorage.getItem('users')) || [];
    const RegisterFunction=(e)=>{
            e.preventDefault()
            const updatedData=[...localDatas,obj]
           localStorage.setItem('users',JSON.stringify(updatedData))
            console.log(updatedData)
    }
    useEffect(()=>{
        console.log('hi')
    },[obj])
  return (
    <div className='container'>
        <h1>Register</h1>
        <form onSubmit={RegisterFunction}>
            <input className='inputBar' onChange={(e)=>setObj({...obj,username:e.target.value})} value={obj.username} placeholder='UserName' type='text'/><br></br>
            <input className='inputBar' onChange={(e)=>setObj({...obj,password:e.target.value})} value={obj.password} placeholder='Password' type='password'/><br></br>
            <button className='regButton'>Register</button>
        </form>
        <p className='exitButton'><Link to='/' >Exit</Link></p>
    </div>
  )
}

export default Register
