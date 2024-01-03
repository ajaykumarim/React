import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Tasks.css'

const Tasks = () => {
        const reqName=localStorage.getItem('Home')
        let old=JSON.parse(localStorage.getItem(reqName))
        let old1=old==null?[]:[...old]
        const [list,setList]=useState('')
        const [arry,setArry]=useState(old1)
        const newTasks=(e)=>{
            e.preventDefault()
            setArry([...arry,list])
            setList('')
        }
        useEffect(()=>{
            let arrys=JSON.stringify(arry)
            localStorage.setItem(reqName,arrys)
        },[arry])
        
        const deleteFunction=(a)=>{
            const del=JSON.parse(localStorage.getItem(reqName))
            setArry(del.filter((x)=>x!=a))
            let delTask=a
            console.log(delTask)
        }
  return (
    <div>
        <h1>Tasks</h1>
        <p>Hi {reqName}!, add tasks for today.</p>
        <form onSubmit={(e)=>newTasks(e)}>
            <input className='inputBar1' onChange={(e)=>setList((e).target.value)} value={list}/>
            <button className='addButton'>Add</button>
        </form>
        <ol>
        {
            arry.map((a)=>
            <li>{a}<button onClick={()=>deleteFunction(a)}>Delete</button><button>Edit</button></li>
            )
        }
        </ol>
        <p><Link to='/'>Log Out</Link></p>
        <p>Forget Password?<span>reset</span></p>
    </div>
  )
}

export default Tasks
