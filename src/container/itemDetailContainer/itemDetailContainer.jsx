import React, { useState, useEffect } from 'react'
import { getProductById} from '../../data/asyncmock'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/shopContext'
import { useContext } from 'react'
import { Item } from '../../conponents/Item/Item'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const { agregarAlCarrito } = useContext(ShopContext)
    const { eliminarDelCarrito } = useContext(ShopContext)
    const {id} = useParams();

    useEffect(() => {
        fetchProducto();
    }, [id]);

    const fetchProducto = async () => {
        try {
            setProducto(await getProductById(id));
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <>
            <h1 className='text-white'>
                {producto?.id && `Producto: ${producto?.Nombre}`}
            </h1>
            <div className='detalle-producto'>
                <div className='producto'>
                    {producto?.id &&
                        <div className="contenedor d-flex flex-wrap justify-content-center align-items-center gap-3">
                            <Item
                                key={producto.id}
                                id={producto.id}
                                categoria={producto.Categoria}
                                nombre={producto.Nombre}
                                descripcion={producto.Descripcion}
                                imagen={`../assets/img/${producto.Imagen}`}
                                precio={producto.Precio}
                            />
                        </div>
                    }
                </div>
                <div className='descripcion'>
                    <p className='text-white'>{producto?.Descripcion}</p>
                    <div className='botones'>
                        <button className="btn btn-dark btn-agregar" onClick={() => agregarAlCarrito(producto) }>Agregar al carrito</button>
                        <button className="btn btn-dark btn-eliminar" onClick={() => eliminarDelCarrito(producto) }>Eliminar del carrito</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetailContainer;


