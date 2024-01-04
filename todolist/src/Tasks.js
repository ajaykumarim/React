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
        let [edit,setEdit]=useState(null)
        const [update,setUpdate]=useState(null)
        const editFunction=(a)=>{
            setEdit(a)
            setUpdate(a)
        }
        const updateFunction=(a,b)=>{
            const up=JSON.parse(localStorage.getItem(reqName))
            up[b]=update
            setArry(up)
            setEdit(null)
        }
        const resetFunction=()=>{
            const resetPass=JSON.parse(localStorage.getItem('users'))
            const resetPass1=resetPass.filter((a)=>a.username==reqName).map((a)=>a.password=321)
            console.log(resetPass1)
            // console.log(resetPass1[0].password=321)
            // JSON.stringify(localStorage.setItem('users',))
        }






        // const reqName=localStorage.getItem('Home')
        // let old=JSON.parse(localStorage.getItem(reqName))
        // const [obj,setObj]=useState({
        //     item:'',
        //     check:''
        // })
        // let localDatas=JSON.parse(localStorage.getItem(reqName)) || [];
        // const newTasks=(e)=>{
        //     e.preventDefault()
        //     const updatedData=[...localDatas,obj]
        //         localStorage.setItem(reqName,JSON.stringify(updatedData))
        //         console.log(updatedData)
        //         setObj({
        //             item:'',
        //             check:''
        //         })
        // }
        // let [tick,setTick]=useState()
        // const checkFunction=(a,b)=>{
        //     const ch=JSON.parse(localStorage.getItem(reqName))
        //     localStorage.setItem(reqName,JSON.stringify(ch))
        //     setTick(ch[b].check=!ch[b].check)
        //     localDatas[b].check=!localDatas[b].check
        //     localStorage.setItem(reqName,JSON.stringify(localDatas))
        // }
        
        // const deleteFunction=(a)=>{
        //     const del=JSON.parse(localStorage.getItem(reqName))
        //     setArry(del.filter((x)=>x!=a))
        //     let delTask=a
        //     console.log(delTask)
        // }
        // let [edit,setEdit]=useState(null)
        // const [update,setUpdate]=useState(null)
        // const editFunction=(a)=>{
        //     setEdit(a)
        //     setUpdate(a)
        // }
        // const updateFunction=(a,b)=>{
        //     const up=JSON.parse(localStorage.getItem(reqName))
        //     up[b]=update
        //     setArry(up)
        //     setEdit(null)
        // }
  return (
    <div>
        <h1>Tasks</h1>
        <p>Hi {reqName}!, add tasks for today.</p>
        <form onSubmit={(e)=>newTasks(e)}>
            <input className='inputBar1' onChange={(e)=>setList((e).target.value)} value={list}/>
            <button className='addButton'>Add</button>
        </form>
        <ol className='lists'>
        {   
            arry.map((a,b)=>
            a!=edit?
            <div className='con'><div className='listtick'><li className='list'>{a}</li></div><div><input className='box' type='checkbox'/><button className='deleteButton' onClick={()=>deleteFunction(a)}>Delete</button><button className='editButton' onClick={()=>editFunction(a)}>Edit</button></div></div>
            :<div><input onChange={(e)=>setUpdate((e).target.value)} value={update}/><button onClick={()=>updateFunction(a,b)}>Save</button></div>
        )}
        </ol>
        <p><Link to='/'>Log Out</Link></p>
        <p>Forget Password?<span className='reset' onClick={resetFunction}>reset</span></p>
    </div>








    // <div>
    //     <h1>Tasks</h1>
    //     <p>Hi {reqName}!, add tasks for today.</p>

    //     <form onSubmit={(e)=>newTasks(e)}>
    //     <input className='inputBar1' onChange={(e)=>setObj({...obj,item:e.target.value,check:false})} value={obj.item}/>
    //         <button className='addButton'>Add</button>
    //     </form>
    //     <ol>
    //     {   
    //         localDatas.map((a,b)=>
    //         a!=edit?
    //         <li key={b}>{a.item}<input onClick={()=>checkFunction(a,b)} type='checkbox' checked={tick}/><button onClick={()=>deleteFunction(a)}>Delete</button><button onClick={()=>editFunction(a)}>Edit</button></li>
    //         :<div><input onChange={(e)=>setUpdate((e).target.value)} value={update}/><button onClick={()=>updateFunction(a,b)}>Save</button></div>
    //     )}
    //     </ol>
    //     <p><Link to='/'>Log Out</Link></p>
    //     <p>Forget Password?<span>reset</span></p>
    // </div>
  )
}

export default Tasks
