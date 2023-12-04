import { Header } from './componentes/heder/Header'
import { Footer } from './componentes/footer/Footer'
import './app.css'
import { Cards } from './componentes/card/Cards'
import { Registro } from './componentes/form/registro'/**/
import { Loguear } from './componentes/loguear/Loguear'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductosDetallesContenedor from './componentes/presentaProducto/ProductosDetallesContenedor'



function App() {

  return (
    <>
        
      
      {/*<Cards/>
      <ProductosDetallesContenedor productoId ={2}/>*/}
        <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/" element={<Cards/>}/>
                <Route path="/productos" element={<Cards/>}/>
                <Route path="/productos/:categoria" element={<Cards/>}/>
                <Route path="/producto/:id" element={<ProductosDetallesContenedor/>} />
                <Route path="/loguear" element ={<Loguear/>} />
                <Route path="/registro" element={<Registro/>} />
              </Routes>
              <Footer/>
         </BrowserRouter>
        
    </>
  )
}

export default App
