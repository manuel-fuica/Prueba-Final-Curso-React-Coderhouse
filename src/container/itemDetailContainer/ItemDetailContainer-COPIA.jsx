import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase/client";
import React from 'react'

const ItemDetailContainerCOPIA = () => {

    useEffect(() => {

        const productRef = doc(db, 'productos', "2GpUD74GsTzlwVzWUdOr");
        
    
        const getProducts = () => {
    
            getDoc(productRef).then((snapshot => {
    
                if (snapshot.exists()) {
    
                    const miProducto = {
                        id: snapshot.id,
                        ...snapshot.data()
                    }
                    console.log(miProducto);
                }
        }))
        } 
    
        getProducts();
    
    }, []);



    return (
    <div>
        <h1 className="text-white">hola</h1>
    </div>
    )
}

export default ItemDetailContainerCOPIA