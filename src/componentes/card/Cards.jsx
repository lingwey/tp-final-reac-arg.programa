import './estilosCard.css';
import { useState, useEffect } from 'react';
import data from '../../data/lista_Productos';
import Card from './Card';



export  const Cards = () => {
    const [productos, setProductos] = useState([])

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
        <article >
            <h1>lista de productos</h1>
            <div className="listaProductos">
             <Card productos= {productos}></Card>
            </div>
            
        </article>
     );
}
 
