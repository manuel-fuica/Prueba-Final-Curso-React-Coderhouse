import React, { useState, useEffect } from 'react'
import { ItemList } from '../../conponents/ItemList/ItemList'
import { getProducts} from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()
    console.log("parametros:", idCategoria)
    
    useEffect(() => {
        getProducts(idCategoria)
            .then(res => setProductos(res))
            .catch(err => console.log(err))
    }, [idCategoria])


    return (
        <>  
            <h1 className='text-white'>{idCategoria ? <>PRODUCTO: { idCategoria}</> : <>CATALOGO DE PRODUCTOS</>}</h1>
            {productos ? <ItemList productos={productos} /> : <div>Cargando...</div>}    
        </>
    )
}

export default ItemListContainer
