import { useEffect, useState } from 'react';
import './estilosForm.css';

export const Registro = () => {
    const controlSubmit = (e) => {
        e.preventDefault();
        console.log('envidado')
    }

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [contrasenia, setcontrasenia] = useState("")
    const [contrasenia2, setcontrasenia2] = useState("")
    useEffect(
        
    )

  return (
    <div className="contenedor">
        <form onSubmit={controlSubmit}>
            <div>
                <h2>Registrarse</h2>
                <div>
                    <label htmlFor="nombre">nombre</label>
                    <input type="text"  placeholder="nombre" id="nombre"/>
                </div>
                <div>
                    <label htmlFor="apellido">apellido</label>
                    <input type="text"  placeholder="apellido" id="apellido"/>
                </div>
                <div>
                    <label htmlFor="mail">mail</label>
                    <input type="email"  placeholder="mail" id="mail"/>
                </div>
                <div>
                    <label htmlFor="contrasenia">contraseña</label>
                    <input type="password"  placeholder="contraseña" id="contrasenia"/>
                </div>
                <div>
                    <label htmlFor="contrasenia2">repitir contraseña</label>
                    <input type="password"  placeholder="repita contraseña" id="contrasenia2"/>
                </div>
              <button type="submit">enviar</button>
            </div>
        </form>
    </div>
  )
}
