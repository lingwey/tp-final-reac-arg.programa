import React from 'react'

export default function ProductosDetalles({producto}) {
  return (
    <div className="product-presenta">
        <div className="product-imagen">
            <img src= {producto.imagen} alt={producto.nombre} />
            <div className="product-descripcion">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                <p>{producto.precio}</p>
                <p>{producto.cantidadDisponible}</p>
            </div>
        </div>
    </div>
  )
}
