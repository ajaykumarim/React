import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Tasks = () => {
        const reqName=localStorage.getItem('Home')
        const [list,setList]=useState(null)
        const newTasks=(e)=>{
            e.preventDefault()

            // setList('')
            console.log(list)
        }
  return (
    <div>
        <h1>Tasks</h1>
        <h4>Hi {reqName}!, add tasks for today.</h4>
        <form onSubmit={(e)=>newTasks(e)}>
            <input onChange={(e)=>setList((e).target.value)}></input>
            <button>Add</button>
        </form>
        <p><Link to='/'>Log Out</Link></p>
    </div>
  )
}

export default Tasks
