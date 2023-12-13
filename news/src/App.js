import logo from './logo.svg';
import './App.css';
import {Home} from './Home'
import { About } from './About'
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"

function App() {
  let isAuthorized=false
  return (
    <div className="App">
      <Router>
      <div>
        {/* <nav>
          {isAuthorized?
          <Link to="/">Home</Link>:
          <Link to="/About">About</Link>}
        </nav> */}
      
    <Routes>
    
    <Route path='/' element={isAuthorized?<Home/>:<About/>}></Route>:
      {/* <Route path='/About' element={<About/>}></Route> */}
    </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
