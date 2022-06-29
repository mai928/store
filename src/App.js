import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Shop from './pages/shop/shop';
import Product from './pages/shop/Product'
import Navbar from './components/navbar/Navbar';
import {BrowserRouter ,Route , Routes}from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route> 
    <Route path="/about" element={ <About/>}></Route> 
    <Route path="/shop" element={ <Shop/>}></Route> 
    <Route path="/Product/:id" element={ <Product/>}></Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
