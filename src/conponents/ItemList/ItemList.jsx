import React from "react";
import { Item } from "../Item/Item";


export const ItemList = ({ productos }) => {

    return (
        
        <div className="contenedor d-flex flex-wrap justify-content-center align-items-center gap-3">
            {productos.map((p) => (
            <Item
                key={p.id}
                id={p.id}
                categoria={p.categoria}
                nombre={p.nombre}
                descripcion={p.descripcion}
                imagen={`${p.imagen}`}
                precio={p.precio}
            />
            ))}
        </div>
        );
};
