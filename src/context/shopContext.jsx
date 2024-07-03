import { createContext, useEffect , useState} from "react";


export const ShopContext = createContext()

export const ShopComponentContext = ({children}) => {

    const [cantidad, setCantidad] = useState(0)
    const [cart, setCart] = useState([])

    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto])
        setCantidad(cantidad + 1)
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
        <ShopContext.Provider value={{ cantidad, agregarAlCarrito, eliminarDelCarrito }}>
            {children}
        </ShopContext.Provider>
    )
}