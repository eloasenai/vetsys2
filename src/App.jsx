import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router"; // Correção feita aqui
import Header from "./components/header/Header";
import Cadastro from "./pages/Cadastro";

const AppContent = () => {
  const location = useLocation();

  // Esconder Header apenas na página de cadastro
  const hideHeader = location.pathname === "/cadastro";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/" element={<div>Página Inicial</div>} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
