import React, { useState, useEffect } from 'react'
import { ItemList } from '../../conponents/ItemList/ItemList'
import { getProducts} from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria, id } = useParams();

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const listadoProductos = await getProducts(idCategoria);
                const filtrarProductos = id
                    ? listadoProductos.filter((unProducto) => unProducto.id === id)
                    : listadoProductos;
                setProductos(filtrarProductos);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProductos();
    }, [idCategoria, id]);

    return (
        <>
            <h1 className='text-white'>
                {idCategoria ? <>PRODUCTO: {idCategoria}</> : <>CATALOGO DE PRODUCTOS</>}
            </h1>
            {productos.length > 0 ? <ItemList productos={productos} /> : <div>Cargando...</div>}
        </>
    );
};

export default ItemListContainer;