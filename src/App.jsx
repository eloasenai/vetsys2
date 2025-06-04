import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Link } from "react-router";
import Header from "./components/header/Header";
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import Gato from "./pages/Gato";
import Cachorro from "./pages/Cachorro";
import Passaros from "./pages/Passaros";
import Roedores from "./pages/Roedores";
import Promocoes from "./pages/Promocoes";
import Footer from "./components/footer/Footer";

const AppWrapper = () => {
  const location = useLocation();

  // Ocultar o Header nas páginas "Entrar" e "Cadastro"
  const hideHeaderRoutes = [
    "/entrar",
    "/cadastro",
    "/gato",
    "/cachorro",
    "/passaros",
    "/roedores",
    "/ofertas",
  ];
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
      <Routes>
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/gato" element={<Gato />} />
        <Route path="/cachorro" element={<Cachorro />} />
        <Route path="/passaros" element={<Passaros />} />
        <Route path="/roedores" element={<Roedores />} />
        <Route path="/ofertas" element={<Promocoes />} />
      </Routes>
      <Footer />
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
