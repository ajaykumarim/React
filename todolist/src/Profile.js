import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'
const Profile = () => {
    const user=localStorage.getItem('Home')
    const pass=JSON.parse(localStorage.getItem('users'))
    const req=pass.filter((a)=>a.username==user)
    
    const [us,setUs]=useState(req[0].username)
    const [pa,setPa]=useState(req[0].password)
    const [con,setCon]=useState(null)
    const updateFun1=(e)=>{
        setUs(e.target.value)
        setCon('hi')
    }
    const updateFun2=(e)=>{
        setPa(e.target.value)
        setCon('hi')
    }
    
    const realUpdate=()=>{
        const updatedValue=pass.find((a)=>a.username==user)
        if(updatedValue){
        const req2=pass.find((a)=>a.username==user).password=pa
        const req1=pass.find((a)=>a.username==user).username=us
        localStorage.setItem('users',JSON.stringify(pass))
        const ok=localStorage.getItem(user)
        console.log(ok)
        localStorage.setItem(us,ok)
        if(us!=user){
            localStorage.removeItem(user)
            }
        localStorage.setItem('Home',us)
        }
        setCon(null)
    }
    
  return (
    <div className='profileDiv'>
        <label className='label'>Username:</label><input className='inputBar' onChange={(e)=>updateFun1(e)} value={us}/><br></br>
        <label className='label'>Password:</label><input className='inputBar' onChange={(e)=>updateFun2(e)} value={pa}/><br></br>
        {
            con!=null?
            <div><button className='regButton' onClick={realUpdate}>Update</button><br></br></div>:null
        }
        <p><Link to='/Tasks'>Back</Link></p>
    </div>
  )
}

export default Profile
