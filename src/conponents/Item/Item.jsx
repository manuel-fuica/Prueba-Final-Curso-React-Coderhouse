import { Link } from "react-router-dom";

export const Item = ({ id, nombre, descripcion, imagen, precio }) => {
    return (
        <>
        <div className="card">
            <div>{categoria}</div>
            <img src="{imagen}"/>
            <div>{nombre}</div>
            <div>{descripcion}</div>
            <div>{precio}</div>
            <Link to={`/item/${id}`}>Ver detalle</Link>
                <button className="btn-card">ver detalle</button>
        </div>
        </>
    );
}