import About from "./components/About/About";
import Carrusel from "./components/Carrusel/Carrusel";
import About2 from "./components/About/About2";


function App() {
  return (
    
    <div className="App">
      
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">@ Foodturistic</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Registrarse</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="Prueba.js">Restaurantes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Videos</a>
              </li>              
              <li class="nav-item">
                <a class="nav-link" href="#">¿Quienes Somos?</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <About />
      <Carrusel />
      
      <About2 />
      
      </div>
  );
}

export default App;