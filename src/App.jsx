import React from 'react';
import './App.css';
import logo from './assets/Captura de tela 2025-04-01 112111.png';
import initialImage from './assets/inicial.png';


function App() {
  const navigateTo = (url) => {
    window.location.href = url; 
  };

  const pages = ['/page1', '/page2', '/page3', '/page4', '/page5']; // URLs das páginas
  
  return (
    <div>
      <div className="top-bar">
        <img src={logo} alt="Logo" />
        <input type="text" className="search-bar" placeholder="O que seu pet precisa?" />
      </div>
      
      <div className="image-container">
        <img src={initialImage} alt="Imagem Inicial" className="initial-image" />
      </div>
    </div>
  );
}

export default App;