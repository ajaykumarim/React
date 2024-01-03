import React, { useState } from 'react'

const NamePass = () => {
    const [initialObject,setObject]=useState([])
    const submitFunction=()=>{
        console.log("hi")
    }
    const getInputUser=(e)=>{
        console.log(e.target.value)
    }
  return (
    <div>
        <form onSubmit={submitFunction}>
            <label>Enter the username:</label>
            <input onChange={(e)=>getInputUser(e)} type='text'/><br></br>
            <label>Enter the password:</label>
            <input onChange={(e)=>getInputUser(e)} type='password'/><br></br>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default NamePass
