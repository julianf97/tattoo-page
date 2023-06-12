import { Presentacion } from '../components/Presentacion/Presentacion';
import { Navbar } from '../components/Navbar/Navbar'
import { NavbarOpen } from '../components/Navbar/NavbarOpen'
import { Secciones } from '../components/Secciones/Secciones';
import { Descripcion } from '../components/Descripcion/Descripcion';
import { DescripcionItaliano } from '../components/DescripcionItaliano/DescripcionItaliano';
import { Book } from '../components/Book/Book';
import { BookItaliano } from "../components/BookItaliano/BookItaliano"
import { Ending } from '../components/Ending/Ending';
import { EndingItaliano } from '../components/EndingItaliano/EndingItaliano';
import { LenguajeContext } from "../context/LenguajeContext/LenguajeContext";
import { NavbarContext } from "../context/NavbarContext/NavbarContext";
import { useContext } from 'react';



export const AppRouter = () => {

    const { inglesElegido } = useContext(LenguajeContext)
    const { isOpen } = useContext(NavbarContext)

  return (
    <div className="AppRouter">
        <Navbar/>
        {
          isOpen ? <NavbarOpen/>
                : <div></div> 
        }
        <Presentacion/>
        <Secciones/>
        {
          inglesElegido ? <Descripcion/>
                        : <DescripcionItaliano/>
        }
        {
          inglesElegido ? <Book/>
                        : <BookItaliano/>
        }
        {
          inglesElegido ? <Ending/>
                        : <EndingItaliano/>
        }
    </div>    
  );
}

