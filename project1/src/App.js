import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./About"


function App() {
  
  return (

    <Router>
      <div className="App">
        <nav>
          <Link to="/Home">Home</Link>
          <Link to="/Home/ 45">About</Link>
        </nav>

        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Home/:par' element={<About />}></Route>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
