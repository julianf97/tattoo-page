import { Presentacion } from './components/Presentacion/Presentacion';
import { Navbar } from './components/Navbar/Navbar'
import { Secciones } from './components/Secciones/Secciones';
import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentacion/>
      <Secciones/>
    </div>
  );
}

export default App;
