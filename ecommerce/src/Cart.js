import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export const Cart =({addto1,value1})=>{
    let b=[]
    let n=0
    for(let i=0;i<=addto1.length;i++){
            if(addto1[i]!=addto1[i+1]){
                b.push(addto1[i])
            }else{
                n=n+1
            }
        }
    return(
        <div className='Cartpagediv'>
            {b.map((q)=> 
            <div>
            <div ><img className='addedimg' src={q}/></div>
            <span>{n}</span>
            </div>
            
        )}
            <button><Link to='/'>Exit</Link></button>
        </div>
    )
}