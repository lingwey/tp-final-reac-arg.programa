import React from 'react'
import { useState, useEffect } from 'react'
import data from '../../data/lista_Productos';
import { Producto } from './Producto';
import { useParams } from 'react-router-dom';

export const ProductosDetalles =() => {
    const [productos, setProductos] = useState([])
    const id = useParams().id
    console.log(id)
    const pedirProductos = () =>{
        return new Promise((resolve, reject) =>
            resolve (data)
        )
    }

    useEffect (()=>{
        pedirProductos().then((res)=>{
            setProductos(res)
        }) 
        
    },[])
  return (
   <article>
        <Producto producto={productos}/>
   </article>
  )
}
