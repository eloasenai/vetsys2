import React, { useState } from "react";

const Gato = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando por:", searchTerm);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg header"
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
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <img
          src="src/assets/img/logo.png"
          alt="Logo"
          style={{ height: "70px", cursor: "pointer" }}
        />

        <div className="d-flex align-items-center mx-auto w-50">
          <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2 rounded-pill shadow-sm"
              type="search"
              placeholder="O que seu pet precisa?"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                backgroundColor: "#0000001c",
                border: "1px solid black",
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
      </nav>

      {/* Imagem do gato */}
      <div style={{marginTop: "90px", textAlign: "center"}}>
        <img
          src="src/assets/img/gato.img/Gato.png" // Substitua pelo caminho correto da imagem do gato
          alt="Gato"
          style={{width:"2037px", height: "600px",marginLeft:"" }}
        />
      </div>

      {/* Imagens de ração de gato */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Alinha os elementos verticalmente
          alignItems: "center", // Centraliza os elementos horizontalmente
          marginTop: "20px",
          padding: "20px",
        }}
      >
        {/* Título "RAÇÃO" */}
        <h1
          style={{
            color: "#FFBD00",
            fontFamily: "Yeseva One",
            fontSize: "70px",
            marginBottom: "20px", // Espaçamento entre o título e as imagens

          }}
        >
          RAÇÃO
        </h1>

        {/* Imagens das rações */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap", // Permite que as imagens quebrem para a próxima linha
            gap: "20px", // Espaçamento entre os quadrados
            marginLeft:"90px", // Margem esquerda para centralizar os quadrados
          }}
        >
          {/* Cada imagem dentro de um quadrado branco */}
          {["raçãogato1.png", "raçãogato2.png", "raçãogato3.png", "raçãogato4.png"].map(
            (src, index) => (
              <div
                key={index}
                style={{
                  width: "220px",
                  height: "220px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para destacar o quadrado
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "black",
                }}
              >
                <img
                  src={`src/assets/img/gato.img/${src}`}
                  alt={`Ração ${index + 1}`}
                  style={{ width: "180px", height: "auto", borderRadius: "5px" }}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Gato;
