import './estilosCard.css';
import { useState, useEffect } from 'react';
import {pedirDatos} from '../../helper/pedirDatos.js';
import Card from './Card';



export  const Cards = () => {
    const [productos, setProductos] = useState([])
  

    useEffect (()=>{
        pedirDatos().then((res)=>{
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
 
