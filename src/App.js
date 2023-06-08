import { Presentacion } from './components/Presentacion/Presentacion';
import { Navbar } from './components/Navbar/Navbar'
import { Secciones } from './components/Secciones/Secciones';
import { Descripcion } from './components/Descripcion/Descripcion';
import { DescripcionItaliano } from './components/DescripcionItaliano/DescripcionItaliano';
import { Book } from './components/Book/Book';
import { BookItaliano } from "./components/BookItaliano/BookItaliano"
import { Ending } from './components/Ending/Ending';
import { EndingItaliano } from './components/EndingItaliano/EndingItaliano';
import { LenguajeProvider, LenguajeContext } from './context/LenguajeContext/LenguajeContext';
import { AppRouter } from "./routes/AppRouter"
import './App.css';

function App() {


  return (
    <div className="App">
      <LenguajeProvider>
        <AppRouter/>
      </LenguajeProvider>
    </div>
  );
}

export default App;
