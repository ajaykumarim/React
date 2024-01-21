import React,{useState} from 'react'

const ImageSlider = ({image1,image2,image3}) => {
    const [initialImage,setInitialImage]=useState(0)
    let images=[image1,image2,image3]
    const previous =()=>{
        if(initialImage!=0){
            setInitialImage((prev)=>prev-1)
        }
    }

    const next =()=>{
        if(initialImage!=images.length-1){
            setInitialImage((prev)=>prev+1)
        }
    }

  return (
    <div>
      <h1>Simple Image Slider</h1>
      <button className={initialImage==0?"hideButton":"but"} onClick={previous}>&lt;</button>
      <img className='img' src={images[initialImage]}/>
      <button className={initialImage==images.length-1?"hideButton":"but"} onClick={next}>&gt;</button>
    </div>
  )
}

export default ImageSlider
