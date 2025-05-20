import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router"; // Certifique-se de usar "react-router-dom"
import Header from "./components/header/Header";
import Login from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} /> {/* Rota para login */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
