import './estilosCard.css';
import { useState, useEffect } from 'react';
import {pedirDatos} from '../../helper/pedirDatos.js';
import Card from './Card';
import { useParams } from 'react-router-dom';



export  const Cards = () => {
    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    useEffect (()=>{
        pedirDatos().then((res)=>{
            if (categoria){
                setProductos(res.filter((prod) => prod.categoria === categoria))
            } else {
                setProductos(res)
            }
        }) 
        
    },[categoria])

    return ( 
        <article >
            <h1>lista de productos</h1>
            <div className="listaProductos">
             <Card productos= {productos}></Card>
            </div>
            
        </article>
     );
}
 
