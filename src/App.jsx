
import './App.css'
import Navbar from './conponents/navbar/navbar'
import ItemListContainer from './container/itemListContainer/itemListContainer'
import ItemDetailContainer from './container/itemDetailContainer/itemDetailContainer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopComponentContext } from './context/shopContext'

import Cart from './container/cart/cart'
import Footer from './conponents/footer/footer'


function App() {

  return (
    <>
    <ShopComponentContext>

      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/productDetail/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </ShopComponentContext>  
    </>
  ) 

  
}

export default App
