import { Presentacion } from './components/Presentacion/Presentacion';
import { Navbar } from './components/Navbar/Navbar'
import { Secciones } from './components/Secciones/Secciones';
import './App.css';
import { Descripcion } from './components/Descripcion/Descripcion';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentacion/>
      <Secciones/>
      <Descripcion/>
    </div>
  );
}

export default App;
