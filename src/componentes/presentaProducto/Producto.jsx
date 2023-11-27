import React from 'react'

export  const Producto = ({producto}) => {
  return (
    <div>
        <div>{producto.imagen}</div>
        <div>{producto.nombre}</div>
    </div>
  )
}
