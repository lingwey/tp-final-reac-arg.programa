import './estilosFooter.css';

export const Footer = () => {
    return ( 
        <footer >
            <div className="footer-container">
                <div className="contactos">
                    <h3>Contactos</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Whatsapp</a></li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}