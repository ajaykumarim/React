import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Alignleft } from './Alignleft'
import { Cart } from './Cart'
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Alignleft />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
