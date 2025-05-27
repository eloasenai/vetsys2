import React, { useState } from "react";

const Gato = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    // Ação ao pesquisar (ex: redirecionar ou filtrar)
    console.log("Buscando por:", searchTerm);
  };

  return (
<nav className="navbar navbar-expand-lg navbar-dark bg header">
<div className="container-fluid d-flex justify-content-between align-items-center">
  
   
      {/* Barra laranja com campo de pesquisa */}
      <div
        style={{
          width: "100%",
          height: "95px",
          backgroundColor: "#FFF0B9",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        >
        <div  className="d-flex align-items-center mx-auto w-50">
        <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
        <input
                className="form-control me-2 rounded-pill shadow-sm"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backgroundColor: "#0000001c",
                  border: "1px solid black", // Borda preta
                }}
                />
          <button
                className="btn rounded-pill px-4"
                type="submit"
                style={{
                  border: "1px solid black",
                  color: "black",
                  backgroundColor: "white",
                }}
                >
                Buscar
              </button>
        </form>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Gato;
