import logo from './logo.svg';
import './App.css';
import Login from './Login.js'
import {BrowserRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {useEffect,useState} from 'react'
import axios from 'axios'
function App() {    
          const[state,setState]=useState(null)
          const [token,setToken]=useState(null)
          const [user,setUser]=useState(
            {
              "email": "",
              "password": ""
            }
          )
          const email={
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
          }         
          useEffect(()=>{
            const newfun=async()=>{  
              try{            
                const data=await axios.post('https://reqres.in/api/login',user)
                setToken(data.data)
                console.log(data.data) 
              }
              catch(error){
                console.log(error)
              }
          }
          newfun()
          })         
          const submitfun=(e)=>{
              e.preventDefault()
          }         
          const gettoken=()=>{           
            // console.log(token)
            if(token!=null){          
            localStorage.setItem('token',JSON.stringify(token))
            setToken(null)
            }else{
              alert('login failed')
            }
            setUser({
              "email": "",
              "password": ""
            })               
          }          
          // console.log(user)

          
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      </BrowserRouter> */}
      <form onSubmit={(e)=>submitfun(e)}>
        <input value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter email'/><br></br>
        <input value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Enter password'/>
        <button onClick={gettoken}>Login</button>
      </form>
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';
// import Login from './Login.js'
// import {BrowserRouter} from 'react-router-dom'
// import {Routes} from 'react-router-dom'
// import {Route} from 'react-router-dom'
// import {useEffect,useState} from 'react'
// import axios from 'axios'
// function App() {    
//           const[state,setState]=useState(null)
//           console.log(state)
//           const [token,setToken]=useState(null)
//           const [user,setUser]=useState('')
//           const email={
//             "email": "eve.holt@reqres.in",
//             "password": "cityslicka"
//           }         
//           useEffect(()=>{
//             const newfun=async()=>{  
//               try{            
//                 const data=await axios.post('https://reqres.in/api/login',JSON.stringify(user))
//                 setToken(data.data)
//                 console.log(data.data) 
//               }
//               catch(error){
//                 console.log(error)
//               }
//           }
//           newfun()
//           },[token])         
//           const submitfun=(e)=>{
//               e.preventDefault()
//           }
//           const gettoken=()=>{
            

//             console.log(token)
//             if(token!=null){
//             localStorage.setItem('token',JSON.stringify(token))
//               alert('login sucess!')
//             }else{
//               alert('login failed')
//             }         
//           }
          
//           console.log(user)

          
//   return (
//     <div className="App">
      
//       <form onSubmit={(e)=>submitfun(e)}>
//         <input  onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter email'/><br></br>
//         <input  onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Enter password'/>
//         <button onClick={gettoken}>Login</button>
//       </form>
//     </div>
//   );
// }

// export default App;

