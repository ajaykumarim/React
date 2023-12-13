import logo from './logo.svg';
import './App.css';
import {Home} from './Home'
import {Button} from './Button'

function App() {
  let one=0
  return (
    <div className="App">
      <Home/>
      <Button count={one}/>
    </div>
  );
}



export default App;
