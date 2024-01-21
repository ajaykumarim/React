import logo from './logo.svg';
import './App.css';
import './Tooglelist.css'
import ImageSlider from './components/ImageSlider'
import ImageSlider2 from './components/ImageSlider2';
import MovieBooking from './components/MovieBooking';
import Tooglelist from './components/Tooglelist';
import StarHover from './components/StarHover'
import image1 from './images.jpg'
import image2 from './flowers-276014_640.jpg'
import image3 from './pexels-james-wheeler-417074.jpg'
import './ImageSlider.css'
import './StarHover.css'
function App() {
  return (
    <div className="App">
      {/* <MovieBooking/> */}
      {/* <Tooglelist/> */} 
      {/* <ImageSlider image1={image1} image2={image2} image3={image3} /> */}
      {/* <ImageSlider2 image1={image1} image2={image2} image3={image3} /> */}
      <StarHover/>
      
    </div>
  );
}

export default App;
