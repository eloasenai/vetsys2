import React, { useState } from "react";

const Cachorro = () => {
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
              {/* Retângulo grande azul */}
          <div
            style={{
              width:" 1280px",
              height: "422px",
              backgroundColor: "#8ECEF2",
              marginTop:" 300px"
            }}
          ></div>
   
        </div>
      </nav>

      {/* Imagem principal */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "90px",
        }}
      >
        <img
          src="src/assets/img/Catioro.img/imagem.png"
          alt="Imagem Cachorro"
          style={{
            width: "2037px",
            maxWidth: "9700px",
            height: "600px",
          }}
        />
      </div>

      {/* Quadrados brancos centralizados */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "200px",
        }}
      >
        {[1, 2, 3, 4,].map((item) => (
          <div
            key={item}
            style={{
              width: "320px",
              height: "320px",
              backgroundColor: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              borderRadius: "8px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Cachorro;
