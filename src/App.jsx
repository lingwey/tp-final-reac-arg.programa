import { Header } from './componentes/heder/Header'
import { Cards } from './componentes/card/Cards'
import { Footer } from './componentes/footer/Footer'
import './app.css'
import { Registro } from './componentes/form/registro'
import { Loguear } from './componentes/loguear/Loguear'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductosDetalles } from './componentes/presentaProducto/ProductosDetalles'


function App() {

  return (
    <>
    <BrowserRouter>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Cards/>}/>
          <Route path="/producto/:id" element={<ProductosDetalles/>} />
          <Route path="/loguear" element ={<Loguear/>} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
