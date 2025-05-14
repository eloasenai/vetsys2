import React from 'react';
import './App.css';
import logo from './assets/Captura de tela 2025-04-01 112111.png'; // Logo

function App() {
  return (
    <div>
      <div className="top-bar d-flex justify-content-between align-items-center p-3">
        <img src={logo} alt="Logo" className="logo" />
        <i className="bi bi-person-circle perfil-icon"></i> {/* Ícone de perfil */}
      </div>
    </div>
  );
}

export default App;
