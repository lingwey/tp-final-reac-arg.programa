import React from "react"
import { Link } from "react-router-dom"
//import BtnComprar from "../btn/BtnComprar"


const Card= ({productos}) => {
  return (
    productos.length > 0 && 
    productos.map((producto) =>{
        return (
        <div key={producto.id} className="card">
            <div className="cardImagen">
                <h2>{producto.nombre}</h2>
                <img src= {producto.imagen} alt={producto.nombre} />
            </div>
            <div className="cardDescYComprar">
                <h4>Descripcion</h4>
                <p className="descripcion">{producto.descripcion}</p>
                <p className="cardPrecio">${producto.precio}</p>
                <p>ID: {producto.id}</p>
                <Link className="verCard" to={`/producto/${producto}`}>ver mas</Link>
            </div>
        </div>
        )
    })   
  )
}
export default Card