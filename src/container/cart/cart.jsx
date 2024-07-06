import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../../context/shopContext'
import { useState, useEffect } from 'react'
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../../firebase/client'
import Swal from 'sweetalert2'


const Cart = () => {


    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [idCompra, setIdCompra] = useState(null)
    const { cart } = useContext(ShopContext)

    const totalCompra = cart.reduce((acc, item) => acc + item.Precio * item.Cantidad, 0)

    useEffect(() => {
        if (idCompra) {
            Swal.fire({
                title: `Nombre: \n${name}\nCorreo: \n${email}\nTelefono: \n${phone}\nTotal Compra: \n$${totalCompra}\nID de Compra: \n${idCompra}`
            });
        }
    }, [idCompra]);

    const generarPedido = async () => {
        const data = {
            buyer: {
                name: name,
                phone: phone,
                email: email
            },
        }
    
        const orderCollection = collection(db, 'orders')
        const {id} = await addDoc(orderCollection, data)
        setIdCompra(id)
    }

    

    return (
    <div className=' carrito text-black'>
        <div className='card productos-elegidos text-center'>
            <h1 className='text-white'>Mis Productos</h1>
            <table className='text-white table'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item,indice) => (
                        <tr key={indice}>
                            <td>{item.Nombre}</td>
                            <td>{item.Precio}</td>
                            <td>{item.Cantidad}</td>
                            <td>{item.Precio * item.Cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p className='mt-3 text-center text-white'>Total Carrito: $ {totalCompra}</p>
        </div>
        <div className='card formulario-orden text-center'>
            <h1 className='text-center text-white'>Pedido</h1>
            <h4 className='text-center text-white'>Ingrese sus datos</h4>
                
            <div className='d-flex flex-column col-12 contenedor-inputs'>
                <h4 className='text-white text-start'>Nombre:</h4>
                <input className='form-control' type="text" placeholder='Ingrese su nombre' onChange={(e) => setName(e.target.value)}/>
                <h4 className='text-white text-start'>Correo:</h4>
                <input className='form-control' type="mail" placeholder='Ingrese su correo' onChange={(e) => setEmail(e.target.value)}/>
                <h4 className='text-white text-start'>Telefono:</h4>
                <input className='form-control' type="text" placeholder='Ingrese su telefono'onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className='btn-finalizar-compra'>
                <button onClick={generarPedido} className='btn btn-outline-success'>Generar Pedido</button>
            </div>
        </div>
    </div>
    )
}

export default Cart
