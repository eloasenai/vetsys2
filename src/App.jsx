import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Header from "./components/header/Header";
import Cadastro from "./pages/Cadastro";

const AppWrapper = () => {
  const location = useLocation();

  // Esconde o Header na página de cadastro
  const hideHeaderRoutes = ["/cadastro"];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
      <>
        {!shouldHideHeader && <Header />}
  
        {/* Botões abaixo do Header */}
        {!shouldHideHeader && (
          <div className="d-flex justify-content-center gap-3 py-3">
            {["Gato", "Cachorro", "Pássaros", "Roedores", "Promoções"].map((label) => (
              <div
                key={label}
                to={`/${label.toLowerCase()}`}
                className="btn"
                style={{
                  border: "1px solid black",
                  borderRadius: "20px",
                  padding: "30px 60px",
                  backgroundImage: `url(/assets/img/botão.png${label.toLowerCase()}.jpg)`, // Imagem de fundo
                  backgroundSize: "cover", // Ajusta a imagem para cobrir o botão
                  backgroundPosition: "center", // Centraliza a imagem
                  margin: "5px",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        )}
  
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          {/* Outras rotas aqui */}
        </Routes>
      </>
    );
  };

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
    
  );
};
<div className="container">
  <h1>Cadastro</h1>
  <p>Esta é a página de cadastro.</p></div>


export default App;
