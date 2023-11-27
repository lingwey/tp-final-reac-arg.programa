import './estilosHeder.css';
import { Link } from 'react-router-dom';


export  const Header = () => {
    return ( 
        <header>
            <div>icono</div>
            <h1>Ecomerce</h1>
            <div className="cajaLogueoRegistro">
                <ul className="logueoRegistro">

                    <li><Link to="/">inicio</Link></li>
                    <li><Link to="./Loguear">login</Link></li>
                    <li><Link to="./Registro">registrarse</Link></li>
                </ul>
            </div>

        </header>
     );
};