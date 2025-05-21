import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Header from "./components/header/Header";
import Cadastro from "./pages/Cadastro";
import Entrar from "./pages/Entrar";
import Footer from "./components/footer/Footer";

  const AppWrapper = () => {
    const location = useLocation();
  
    // Ocultar o Header nas páginas "Entrar" e "Cadastro"
    const hideHeaderRoutes = ["/entrar", "/cadastro"];
    const shouldHideHeader = hideHeaderRoutes.includes(location.pathname);

 
  return (
    <>
   {!shouldHideHeader && <Header />} {/* Renderiza o Header apenas se não estiver nas rotas ocultas */}
      <Routes>
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro" element={<Cadastro />} />
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