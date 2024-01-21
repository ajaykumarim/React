import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Register.css'
const Register = () => {
    const navigate=useNavigate()
    // const [userName,setUserName]=useState('')
    // const [userPass,setUserPass]=useState('')
    const [obj,setObj]=useState({
        username:'',
        password:''
    })
    let localDatas=JSON.parse(localStorage.getItem('users')) || [];
    const RegisterFunction=(e)=>{
            e.preventDefault()
            if(obj.username==''){
                alert("Please enter Username")
            }else if(obj.password==''){
                alert("Please enter Password")
            }else if(localDatas.some((a)=>a.username==obj.username)){
                alert("Username already exists!")
            }else{
                const updatedData=[...localDatas,obj]
                localStorage.setItem('users',JSON.stringify(updatedData))
                console.log(updatedData)
                const regName=obj.username
                localStorage.setItem('Home',regName)
                navigate('/')
            }
            setObj({
                username:'',
                password:''
            })
    }
    useEffect(()=>{
        console.log('hi')
    },[obj])
  return (
    <div className='loginBody'>
        <h1 className='registerTitle'>Register</h1>
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
