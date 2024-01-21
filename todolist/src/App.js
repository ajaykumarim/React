import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Register from './Register';
import Login from './Login';
import Tasks from './Tasks';
import React, { useState } from 'react'
import Profile from './Profile';

function App() {
  // Login

  const [name,setName]=useState('')
    const [pass,setPass]=useState('')
    const onChangeFunction1=(e)=>{
        setName(e.target.value)
    }
    const onChangeFunction2=(e)=>{
        setPass(e.target.value)
    }
    const loginFunction=(e,navigate)=>{
        e.preventDefault()
        const users=JSON.parse(localStorage.getItem('users'))||[]
        const reqName=name
        localStorage.setItem('Home',reqName)
        users.some(a=>a.username==name&&a.password==pass)?navigate('/Tasks'): alert("Enter a valid username and password")
        setName('')
        setPass('')  
    }
    //register


  return (
    <div className="container">
    <BrowserRouter>
      <Routes>
          <Route path= '/' element={<Login name={name} pass={pass} onChangeFunction1={onChangeFunction1} onChangeFunction2={onChangeFunction2} loginFunction={loginFunction}/>}/>
          <Route path= '/Register' element={<Register/>}/>
          <Route path= '/Tasks' element={<Tasks/>}/>
          <Route path= '/Profile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
