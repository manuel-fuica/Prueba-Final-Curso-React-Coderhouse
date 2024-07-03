import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { useState } from "react";

export const Item = ({ id, categoria, nombre, descripcion, imagen, precio }) => {

    
    return (
        <div className="card text-center bg-dark ">
            <div className="card text-center">
                <div className="">{categoria}</div>
                <img src={imagen} alt="imagen producto" className="card-img mx-auto d-block" />
                <h3>{nombre}</h3>
                <h2>$ {precio}</h2>
                <Link to={`/productDetail/${id}`}>Ver detalle</Link>
            </div>
        </div>
    );
}