import { Presentacion } from './components/Presentacion/Presentacion';
import { Navbar } from './components/Navbar/Navbar'
import { Secciones } from './components/Secciones/Secciones';
import { Descripcion } from './components/Descripcion/Descripcion';
import { Book } from './components/Book/Book';
import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentacion/>
      <Secciones/>
      <Descripcion/>
      <Book/>
      <Descripcion/>
    </div>
  );
}

export default App;
