import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Tasks.css'
import Header from './Header'
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
        
        const deleteFunction=(a,b)=>{
            const del=JSON.parse(localStorage.getItem(reqName))
            setArry(del.filter((_,y)=>y!=b))
            let delTask=a
            console.log(delTask)
        }
        let [edit,setEdit]=useState(null)
        const [update,setUpdate]=useState(null)
        const editFunction=(a,b)=>{
            setEdit(b)
            setUpdate(a)
        }
        const updateFunction=(a,b)=>{
            const up=JSON.parse(localStorage.getItem(reqName))
            up[b]=update
            setArry(up)
            setEdit(null)
        }
        const [hello,setHello]=useState('')
        // const [tr,setTr]=useState(false)
        
        
        const checkFun =(a,b)=>{
                // setTr(!tr)
                // setHello(b)
                setHello((c)=>({...c,[b]:!c[b]}))
        }
        let val
        const [se,setSe]=useState('')
        const searchInput1=(e)=>{
            setSe(e.target.value)
        }
        
  return (
    <div>
        <Header/>
        <div className='center'>
        <h1 className='heading'>Tasks</h1>
        <p className='para'>Hi {reqName}!, add tasks for today.</p>
        <form  className='inputplus' onSubmit={(e)=>newTasks(e)}>
            <input className='inputBar1' onChange={(e)=>setList((e).target.value)} value={list}/>
            <button className='addButton'>+</button>
        </form>
        <input onChange={(e)=>searchInput1(e)} id='inputb' className='inputBar1' placeholder='Search...'/>
        <ol className='lists'>
        {   
            arry.filter((a)=>a.toLowerCase().includes(se.toLowerCase())).map((a,b)=>
            b!=edit?
            <div className='con'><div className='listtick'><li style={{textDecoration:hello[b]?'line-through':'none'}} className='list'>{a}</li></div><div className='buttonsBlock'><input  className='box' onClick={()=>checkFun(a,b)}  type='checkbox'/><button className='editButton' onClick={()=>editFunction(a,b)}>Edit</button><button className='deleteButton' onClick={()=>deleteFunction(a,b)}>Delete</button></div></div>
            :<div className='con'><input className='editInbox' onChange={(e)=>setUpdate((e).target.value)} value={update}/><button className='saveButton' onClick={()=>updateFunction(a,b)}>Save</button></div>
        )}
        </ol>
        <p className='logout'><Link to='/'>Log Out</Link></p>
        </div>
    </div>
  )
}

export default Tasks
