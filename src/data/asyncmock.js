import { collection, query, getDocs} from "firebase/firestore"
import { db } from "../firebase/client";



export const getProducts = async (idCategoria) => {
    
    const productosFirebase = collection(db, 'productos');
    const q = query(collection(db, "productos"));
    const listadoProductos = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {

        listadoProductos.push({ ...doc.data(), id: doc.id });
    });


    console.log(idCategoria)
        if(!idCategoria) { 
            return listadoProductos 
        }else {
            const listado = listadoProductos.filter(unProducto => unProducto.Categoria === idCategoria) 

            return listado
        }
        


    
}