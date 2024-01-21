import React,{useState} from 'react'


const ImageSlider2 = ({image1,image2,image3}) => {
    const image=[image1,image2,image3]
    const [initialImage,setInitialImage]=useState(0)
    const pre=()=>{
        if(initialImage!=0){
            setInitialImage((a)=>a-1)
        }else{
            setInitialImage(image.length-1)
        }
    }
    const nex=()=>{
        if(initialImage!=image.length-1){
            setInitialImage((a)=>a+1)
        }else{
            setInitialImage(0)
        }
    }
  return (
    <div>
        
        <div className='bl'>
        <img className='img' src={image[initialImage]}/>
        <div className='clickb'>
        {
            image.map((a,b)=>
            <p onClick={()=>setInitialImage(b)} className='click'></p>
            )
        }
        </div>
        </div>
        <button onClick={pre}>{'<='}</button>
        <button onClick={nex}>{'=>'}</button>
    </div>
  )
}

export default ImageSlider2
