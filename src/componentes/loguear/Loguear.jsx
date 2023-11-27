import './estilosLoguear.css';
import React, { useState } from 'react';

export const Loguear = () => {
    const [ocultar, setOcultar] = useState(true)
    const togglevisible = () =>{
        setOcultar(!ocultar)
    }


  return (
   <form>
      <h2>ingrese su usuario</h2>
      <div>
        <input type ="email" placeholder= "Email"></input>
      </div>
        {ocultar ? <h4>estoy a la vista</h4>: null} 
        <button onClick={togglevisible}>desaparecer el h4</button>

        
   </form>
  )
}

 