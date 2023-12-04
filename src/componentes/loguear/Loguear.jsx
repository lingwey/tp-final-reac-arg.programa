import './estilosLoguear.css';
import React, { useState } from 'react';

export const Loguear = () => {
    const [ocultar, setOcultar] = useState(true)
    const togglevisible = () =>{
        setOcultar(!ocultar)
    }


  return (
  <div className="container">
    <form className="form-logueo">
        <div className="contenedor-logueo">
          <h2>ingrese su usuario</h2>
          <div>
            <input type ="email" placeholder= "Email"></input>
          </div>
          <div>
            <input type ="password" placeholder= "contraseña"></input>
          </div>
            {ocultar ? <h4>estoy a la vista</h4>: null} 
            <button type="submit" onClick={togglevisible}>desaparecer el h4</button>
        </div>      
    </form>
   </div>
  )
}

 