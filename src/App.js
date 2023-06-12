import { LenguajeProvider } from './context/LenguajeContext/LenguajeContext';
import { NavbarProvider } from './context/NavbarContext/NavbarContext';
import { AppRouter } from "./routes/AppRouter"
import './App.css';

function App() {


  return (
    <div className="App">
      <LenguajeProvider>
        <NavbarProvider>
          <AppRouter/>
        </NavbarProvider>
      </LenguajeProvider>
    </div>
  );
}

export default App;
