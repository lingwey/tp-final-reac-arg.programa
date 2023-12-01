import { useState, useEffect } from "react"
import { pedirItemXId } from "../../helper/pedirDatos"
import ProductosDetalles from "./ProductosDetalles"
import { useParams } from "react-router-dom";
import "./estilosPresentacion.css"

export default function ProductosDetallesContenedor() {
    const [producto, setProducto] = useState(null)
    const id = useParams().id;

    useEffect(() => {
        pedirItemXId(Number(id)).then((res) => {
            setProducto(res);
        })
    }, [id])
    

  return (
    <div>
        {producto &&  <ProductosDetalles producto = {producto} />}
       
    </div>
  )
}
