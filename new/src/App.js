import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [pass, setPass] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("name", name)
    console.log("pass", pass)
  }
  return (
    <div>
      <>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
          <input type='password' placeholder='password' onChange={(e) => setPass(e.target.value)} />
          <button>Submit</button>
        </form>
      </>



    </div>
  );
}

