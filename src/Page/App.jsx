import React, { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home.jsx'
import Shop from './Shop.jsx';
import Pants from './Pants.jsx'
import Shorts from './Shorts.jsx'
import Shirts from './Shirts.jsx'
import Shoes from './Shoes.jsx'
import Sweaters from './Sweaters.jsx'
import Cart from './Cart.jsx'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'

function App() {
 

  useEffect(()=>{
    fetch('http://localhost:8080/user')
  }, [])

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="/shop" element={<Shop/>}></Route>
      <Route path="/pants" element={<Pants/>}></Route>
      <Route path="/shoes" element={<Shoes/>}></Route>
      <Route path="/shorts" element={<Shorts/>}></Route>
      <Route path="/sweaters" element={<Sweaters/>}></Route>
      <Route path="/shirts" element={<Shirts/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
