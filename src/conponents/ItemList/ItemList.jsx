import React from "react";
import { Item } from "../Item/Item";


export const ItemList = ({ productos }) => {

    return (
        <div className="contenedor">
            <h1>Estos son los productos</h1>
            {productos.map((p) => {
                <Item key={p.id}
                    id={p.id}
                    nombre={p.nombre}
                    descripcion={p.descripcion}
                    imagen={p.imagen}
                    precio={p.precio} />;
            })}
        </div>
    );
};
