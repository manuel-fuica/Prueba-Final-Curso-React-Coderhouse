import React, { useState, useEffect } from 'react'
import { ItemList } from '../../conponents/ItemList/ItemList'
import { listadoProductos, getProducts} from '../../data/asyncmock'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    
    useEffect(() => {
        getProducts()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
    }, [])


    return (
        <>
            {productos ? <h1 className='text-white'>Cargando...</h1> : <h1>Estos son los productos</h1>}       
        </>
    )
}

export default ItemListContainer
