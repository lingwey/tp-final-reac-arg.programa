import { useForm } from 'react-hook-form';
import './estilosForm.css';

export const Registro = () => {
    
    const {register, handleSubmit} = useForm()

    const enviar = (data) =>{
        console.log(data)
    }

  return (
    <div className="contenedor">
        <form  onSubmit={handleSubmit(enviar)}>
            <div>
                <h2>Registrarse</h2>
                <div>
                    <label htmlFor="nombre">nombre</label>
                    <input type="text"  placeholder="nombre" id="nombre" {...register("nombre")}/>
                </div>
                <div>
                    <label htmlFor="apellido">apellido</label>
                    <input type="text"  placeholder="apellido" id="apellido" {...register("apellido")}/>
                </div>
                <div>
                    <label htmlFor="mail">mail</label>
                    <input type="email"  placeholder="mail" id="mail" {...register("mail")}/>
                </div>
                <div>
                    <label htmlFor="telefono">telefono</label>
                    <input type="phone"  placeholder="1111" id="telefono" {...register("telefono")}/>
                </div>
                <div>
                    <label htmlFor="contrasenia">contraseña</label>
                    <input type="password"  placeholder="contraseña" id="contrasenia" {...register("contrasenia")}/>
                </div>
                <div>
                    <label htmlFor="contrasenia2">repitir contraseña</label>
                    <input type="password"  placeholder="repita contraseña" id="contrasenia2" {...register("contrasenia2")}/>
                </div>
              <button type="submit">enviar</button>
            </div>
        </form>
    </div>
  )
}
