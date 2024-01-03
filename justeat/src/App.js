import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import Nav from './Nav';
import Home from './Home';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
          <Routes>
            <Route element={<Home/>}/>
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
