
import './App.css'
import Navbar from './conponents/navbar/navbar'
import ItemListContainer from './container/itemListContainer/itemListContainer'

function App() {

  return (
    <>
      <Navbar /> 
      <ItemListContainer greeting={'BIENVENIDO'} />
    </>
  ) 

  
}

export default App
