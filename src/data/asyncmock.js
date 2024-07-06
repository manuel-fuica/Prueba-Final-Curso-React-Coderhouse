import { collection, query, getDocs, doc, getDoc} from "firebase/firestore"
import { db } from "../firebase/client";


export const getProducts = async (idCategoria) => {
    
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

export const getProductById = async (id) => {
    
    const q = doc(db, "productos", id);

    const querySnapshot = await getDoc(q);

    return {...querySnapshot.data(), id: querySnapshot.id}
}