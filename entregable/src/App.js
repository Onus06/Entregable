import About from "./components/About/About";
import Carrusel from "./components/Carrusel/Carrusel";
import About2 from "./components/About/About2";
import About3 from "./components/About/About3";
import About4 from "./components/About/About4";
import About5 from "./components/About/About5";
import Descuentos from "./components/About/Descuentos";


function App() {
  return (
    
    <div className="App">
<nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Clinica Imperial</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='About2'>Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Prueba.js">Productos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Carrito de Compras</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="#">Mi Cuenta</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>

      <About />
      <Carrusel />
      <About2 />
      <About3 />
      <About4 />
      <Descuentos />
    </div>


      
  );
}

export default App;