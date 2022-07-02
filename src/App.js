import './App.css';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Shop from './pages/shop/shop';
import Product from './pages/shop/Product';
import Navbar from './components/navbar/Navbar';
import TodoList from './pages/todo/Todo';
import Signin from './pages/signin/Signin';
import Signup from './pages/signup/Signup';
import Counter from './components/counter/Counter';

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
    <Route path="/todo" element={<TodoList/>}></Route>
    <Route path="/counter" element={<Counter/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
