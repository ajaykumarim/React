import React from 'react'
import { useState } from 'react'
import NamePass from './NamePass'

const App = () => {
    let [initial1,final1]=useState([])
    let [initial,final]=useState('')

  function newfunction(e){
          e.preventDefault()
          final1([...initial1,initial])
          // console.log(initial1)
          final('')
  }
    function del(c){
        final1(initial1.filter((a)=>a!==initial1[c])) 
    }
    
    const [findIndex,setFindIndex]=useState(null)

    const [update,setUpdate]=useState('')
    function editFunction(c){
      setFindIndex(c)
      let req=initial1.filter((_,b)=> b==c)
      setUpdate(req)
    }
    function updateFunction(c){
      let copyOfArray=[...initial1]
      copyOfArray[c]=update
      final1(copyOfArray)
      setFindIndex(null)
      console.log(copyOfArray)
    }

    const [n,setn]=useState(-1)
    function toGetIndex(){
        setn(n+1)
    }
    // console.log(n)

  // name and password

  // let [initial2, final2] = useState([])
  // let [initial3, final3] = useState('')
  // let [initial4, final4] = useState('')

  // function newfunction1(e) {
  //   e.preventDefault()
  //   final2([...initial2, { name: initial3, pass: initial4 }])
  //   console.log(initial2)
  //   final3('')
  //   final4('')
  // }
  // function del2(c) {
  //   final2(initial2.filter((_,b) => b !== c))
  //   console.log(initial2[c].name)
  // }
  // let [selectedItem,sel]=useState()
  // function edit(c){
  //   let req=initial2.filter((_,b)=> b==c)
  //   final3(req[0].name)
  //   final4(req[0].pass)
  //   sel(c)
  // }

  return (
    <div>
      <form onSubmit={(e)=>newfunction(e)}>
        <input value={initial} onChange={(e)=>final(e.target.value)} />
        <button onClick={toGetIndex}>Add</button>
        </form>
        <ol>
        {
          initial1.map((b,c)=>
          <div>
            {findIndex!=c?
          <li key={c} >{b}<button onClick={()=>editFunction(c)}>Edit</button><button onClick={()=>del(c)}>Delete</button></li>
          :<div><input value={update} onChange={(e)=>setUpdate(e.target.value)}/><button onClick={()=>updateFunction(c)}>update</button></div>
            }
          </div>
          )
        }
        </ol>


      {/* name and password */}

      {/* <form onSubmit={(e) => newfunction1(e)}>
        <label>username:</label>
        <input value={initial3} onChange={(e) => final3(e.target.value)} /><br></br>
        <label>password:</label>
        <input value={initial4} onChange={(e) => final4(e.target.value)} /><br></br>
        <button>Add</button>
      </form>
      <ol>
        {
          initial2.map((b, c) =>
            <li key={c} >Name:{b.name}{" and "}pass:{b.pass}<button style={{backgroundColor: selectedItem == c ? 'yellow' : 'green'}}  onClick={()=>edit(c)}>Edit</button><button style={{backgroundColor:'red'}} onClick={() => del2(c)}>Delete</button></li>
          )
        }
      </ol> */}
      <NamePass/>
    </div>
  )
}

export default App


