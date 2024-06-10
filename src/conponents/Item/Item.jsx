import { Link } from "react-router-dom";

export const Item = ({ id, categoria, nombre, descripcion, imagen, precio }) => {
    return (
        <div className="card text-center bg-dark ">
            <div className="card text-center">
                <div className="">{categoria}</div>
                <img src={imagen} alt="imagen producto" className="card-img mx-auto d-block" />
                <h3 className="">{nombre}</h3>
                <p className="">{descripcion}</p>
                <h2 className="">$ {precio}</h2>
                <Link to={`/item/${id}`}>Ver detalle</Link>
            </div>
        </div>
    );
}