import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
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

export default App;
