import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navegacao from './Componentes/Navegacao/Index';
import Inicio from './Componentes/Inicio/Index';
import Sobre from './Componentes/Sobre/Index';
import Projetos from './Componentes/Projetos/Index';
import Habilidades from './Componentes/Habilidades/Index';
import Footer from './Componentes/Footer/Index';
import Contato from './Componentes/Contato/Index';

function App() {
  return (
    <div className="App">
      <div className="app-box">
        <Navegacao />
        <header>
          <Inicio />
        </header>
        <main>
          <Sobre />
          <Habilidades />
          <Projetos />
          <Contato />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
