import React, { useState } from "react";

const Promocoes = () => {
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
              placeholder="Buscar ofertas"
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

      {/* Imagem de oferta */}
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/promoções/imagemp.png" // Substitua pelo caminho correto da imagem de oferta
          alt="Oferta"
          style={{
            width: "2510px", // Define a largura fixa da imagem
            height: "1100px", // Define a altura fixa da imagem
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centraliza os quadrados horizontalmente
          gap: "20px", // Adiciona espaçamento entre os quadrados
          marginTop: "50px", // Adiciona margem superior
          flexWrap: "wrap", // Permite que os quadrados quebrem para a próxima linha em telas menores
        }}
      >
        {/* Ração */}
        <img
          style={{
            width: "450px",
            height: "100%",
            gap: "40px",
            marginRight: "200px",
          }}
          src="src/assets/img/promoções/Group 39.png"
          alt="Ração"
        />

        {/* Petisco */}
        <img
          style={{
            width: "450px",
            height: "100%",
            gap: "40px",
            marginRight: "200px",
          }}
          src="src/assets/img/promoções/Group 40.png"
          alt="Petisco"
        />

        {/* Acessórios */}
        <img
          style={{
            width: "450px",
            height: "100%",
            gap: "40px",
            marginRight: "20px",
          }}
          src="src/assets/img/promoções/Group 41.png"
          alt="Acessórios"
        />
      </div>

      {/* Remédios */}
      <h1
        style={{
          color: "#FFBD00",
          fontFamily: "Yeseva One",
          fontSize: "70px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Remédios
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap", // Impede que os remédios quebrem para a próxima linha
          gap: "20px", // Adiciona espaçamento entre os remédios
          justifyContent: "center", // Centraliza os remédios horizontalmente
          overflowX: "auto", // Adiciona rolagem horizontal caso o espaço não seja suficiente
          padding: "10px",
        }}
      >
        {/* Remédio 1 */}
        <div
          style={{
            width: "300px",
            height: "500px",
            backgroundColor: "#ffffff", // Fundo branco
            borderRadius: "10px", // Bordas arredondadas
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra leve
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "90%", // Ajusta a largura da imagem dentro do retângulo
              height: "50%", // Ajusta a altura da imagem dentro do retângulo
              objectFit: "cover", // Ajusta a imagem sem distorção
              borderRadius: "5px", // Bordas arredondadas para a imagem
            }}
            src="src/assets/img/promoções/remedio1.png"
            alt="Remédio 1"
          />
        </div>

        {/* Remédio 2 */}
        <div
          style={{
            width: "450px",
            height: "300px",
            backgroundColor: "#ffffff", // Fundo branco
            borderRadius: "10px", // Bordas arredondadas
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra leve
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "90%", // Ajusta a largura da imagem dentro do retângulo
              height: "90%", // Ajusta a altura da imagem dentro do retângulo
              objectFit: "cover", // Ajusta a imagem sem distorção
              borderRadius: "5px", // Bordas arredondadas para a imagem
            }}
            src="src/assets/img/promoções/remedio2.png"
            alt="Remédio 2"
          />
        </div>

        {/* Remédio 3 */}
        <div
          style={{
            width: "450px",
            height: "300px",
            backgroundColor: "#ffffff", // Fundo branco
            borderRadius: "10px", // Bordas arredondadas
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra leve
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "90%", // Ajusta a largura da imagem dentro do retângulo
              height: "90%", // Ajusta a altura da imagem dentro do retângulo
              objectFit: "cover", // Ajusta a imagem sem distorção
              borderRadius: "5px", // Bordas arredondadas para a imagem
            }}
            src="src/assets/img/promoções/remedio3.png"
            alt="Remédio 3"
          />
        </div>

        {/* Remédio 4 */}
        <div
          style={{
            width: "450px",
            height: "300px",
            backgroundColor: "#ffffff", // Fundo branco
            borderRadius: "10px", // Bordas arredondadas
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra leve
          
          
          }}
        >
          <img
            style={{
           
              width: "90%", // Ajusta a largura da imagem dentro do retângulo
              height: "90%", // Ajusta a altura da imagem dentro do retângulo
              objectFit: "cover", // Ajusta a imagem sem distorção
              borderRadius: "5px", // Bordas arredondadas para a imagem
            }}
            src="src/assets/img/promoções/remedio4.png"
            alt="Remédio 4"
          />
        </div>

        {/* Remédio 5 */}
        <div
          style={{
            width: "450px",
            height: "300px",
            backgroundColor: "#ffffff", // Fundo branco
            borderRadius: "10px", // Bordas arredondadas
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adiciona uma sombra leve
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "90%", // Ajusta a largura da imagem dentro do retângulo
              height: "90%", // Ajusta a altura da imagem dentro do retângulo
              objectFit: "cover", // Ajusta a imagem sem distorção
              borderRadius: "5px", // Bordas arredondadas para a imagem
            }}
            src="src/assets/img/promoções/remedio5.png"
            alt="Remédio 5"
          />
        </div>
      </div>
    </>
  );
}
export default Promocoes;