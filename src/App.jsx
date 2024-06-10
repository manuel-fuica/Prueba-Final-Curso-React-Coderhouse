
import './App.css'
import Navbar from './conponents/navbar/navbar'
import ItemListContainer from './container/itemListContainer/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  ) 

  
}

export default App
