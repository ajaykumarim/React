import React,{useState} from 'react'
import {Link} from 'react-router-dom'
export const Cart =({addto1,value1})=>{
    console.log(value1)
    let b=[]
    let [int,setInt]=useState({})
    let minus =(index) =>{
        setInt({
          ...int,
          [index]:int[index] && int[index] > 1 ? int[index] - 1 : 1,
        });
      };
      let plus =(index) => {
        setInt({
          ...int,
          [index]: int[index]?int[index] + 1 : 2,
        });
      };
    for(let i=0;i<=addto1.length;i++){
            if(addto1[i]!=addto1[i+1]){
                b.push(addto1[i])
            }
            // else{
            //     n=n+1
            // }
        }

        let[one,two]=useState(null)
        if(one==null){
            b=b
        }else{
            b=one
        }
        let del=(q)=>{
            two(one=b.filter((a)=>a!=q))
            }
        

    return(
        <div className='Cartpagediv'>
            {b.map((q,index)=> 
            <div className='itemscartdiv'>
            <div ><img className='addedimg' src={q}/></div>
            <div className='itemscart'>
            <button onClick={()=>minus(index)} className='butt'>-</button ><p>{int[index] || 1}</p><button onClick={()=>plus(index)} className='butt'>+</button>
            <button className='delete' onClick={()=>del(q)}>Delete</button>
            </div>
            </div>
            
        )}
            <button><Link to='/'>Exit</Link></button>
        </div>
    )
}