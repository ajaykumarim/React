import React, { useState } from 'react'
import './Home.css'
import jasonData from "./Object.json"
import { Nav } from './Nav'
export const Home = (props) => {

    let value1 = jasonData.data.filter(a => a.size == props.propvalue)
    if (props.propvalue == null) {
        value1 = jasonData.data
    }
    let arr=[]
     let [ini,fina]=useState(null)
     let [ini1,fina1]=useState(null)
     var showParentContent=(arg,arg1)=>{
        fina(arg)
        fina1(arg1)
        arr.push(arg)
     }
    //  console.log(arr)
     
    return (
        <div className='contents'>
            <Nav  />
            <div className="rightSection">
                <img src={ini}/>
                <div>{ini1}</div>
                <p>9 product(s) found</p>
                <div className="imagesblock">
                    {
                        value1.map((a) =>

                            <div className="items">
                                <img className="imageSizing" src={a.img} />
                                <div>{a.name}</div>
                                <div>Size:{a.size}</div>
                                <div>price:{a.price}</div>
                                <div onClick={()=>showParentContent(a.img,a.name)} className="addCart">Add to cart</div>

                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
};