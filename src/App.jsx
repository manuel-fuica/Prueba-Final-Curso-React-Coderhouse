
import './App.css'
import Navbar from './conponents/navbar/navbar'
import ItemListContainer from './container/itemListContainer/itemListContainer'
import ItemDetailContainer from './container/itemDetailContainer/itemDetailContainer' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopComponentContext } from './context/shopContext'


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
        </Routes>

      </BrowserRouter>
      </ShopComponentContext>  
    </>
  ) 

  
}

export default App
