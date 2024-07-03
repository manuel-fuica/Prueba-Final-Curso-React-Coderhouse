import React, { useState, useEffect } from 'react'
import { ItemList } from '../../conponents/ItemList/ItemList'
import { getProducts} from '../../data/asyncmock'
import { useParams } from 'react-router-dom'

import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'
import { ShopComponentContext } from '../../context/shopContext'




const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const { agregarAlCarrito } = useContext(ShopContext)
    const { eliminarDelCarrito } = useContext(ShopContext)
    


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
                {idCategoria ? <>PRODUCTO: {idCategoria}</> : <>PRODUCTO: </>}
            </h1>
            <div className='detalle-producto'>
                <div className='producto'>
                    {productos.length > 0 ? <ItemList productos={productos} /> : <div>Cargando...</div>}
                </div>
                <div className='descripcion'>
                    <p className='text-white'>{productos[0]?.descripcion}</p>
                    <div className='botones'>
                        <input type="number" placeholder='Cantidad' />
                        <button className="btn btn-dark btn-agregar" onClick={() => agregarAlCarrito(producto) }>Agregar al carrito</button>
                        <button className="btn btn-dark btn-eliminar" onClick={() => eliminarDelCarrito(producto) }>Eliminar del carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetailContainer;


