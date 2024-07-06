import { createContext, useEffect , useState} from "react";


export const ShopContext = createContext()

export const ShopComponentContext = ({children}) => {

    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto) => {
        const indice = cart.find(item => item.id === producto.id)

        if (indice !== undefined) {
            setCart(cart.map(item => item.id === producto.id ? { ...item, Cantidad: item.Cantidad + 1 } : item))
            setCantidad(cantidad + 1)
            return
        }else{
            setCart([...cart, {...producto, Cantidad: 1}])
            setCantidad(cantidad + 1)
        }
    }

    const eliminarDelCarrito = (producto) => {
        setCart(cart.filter(item => item !== producto));
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    useEffect(() => {
        setCantidad(0)
    }, [])

    return (
        <ShopContext.Provider value={{ cantidad, agregarAlCarrito, eliminarDelCarrito, cart}}>
            {children}
        </ShopContext.Provider>
    )
}