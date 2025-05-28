import React, { useState } from "react";

const Roedores = () => {
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

      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/Roedores.img/fundoImagem.png"
          alt="Gato"
          style={{ width: "2037px", height: "600px" }}
        />
      </div>
      {/* RAÇÃO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#FFBD00",
            fontFamily: "Yeseva One",
            fontSize: "70px",
            marginBottom: "20px",
            marginRight: "1300px",
          }}
        >
          RAÇÃO:
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {[
            {
              src: "src/assets/img/Roedores.img/RacaoCoelho.webp",
              alt: "Ração 1",
              info: [
                "Nutrical Premium para Coelhos Adultos",
                "Ingredientes: Feno, cenoura, alfafa",
                "Tamanho: 1,2kg",
                "Idade: Adultos",
                "Preço: 95,90",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/COELHO-FILHOTE-NATURAL.webp",
              alt: "Ração 2",
              info: [
                "Ração natural para coelhos filhotes",
                "Ingredientes: Feno, maçã, alfafa",
                "Tamanho: 1,2kg",
                "Idade: Filhotes",
                "Preço: 99,90",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/RacaoCoelho3.jpg",
              alt: "Ração 3",
              info: [
                "Ração premium para coelhos",
                "Ingredientes: Feno, beterraba, alfafa",
                "Tamanho: 1.2kg",
                "Idade: Adultos",
                "Preço: ",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/Racao-Nutropica-para-Porquinho-da-India-Super-Premium-12kg.png",
              alt: "Ração 4",
              info: [
                "Ração Nutrópica para porquinhos-da-índia",
                "Ingredientes: Feno, ervilha, alfafa",
                "Tamanho: 1.2kg",
                "Idade: Porquinhos-da-índia",
                "Preço: ",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/HAMSTER-MUESLI-300---F.webp",
              alt: "Ração 5",
              info: [
                "Ração Muesli para hamsters",
                "Ingredientes: Grãos, sementes, frutas secas",
                "Tamanho: 800g",
                "Idade: Hamsters",
                "Preço: ",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "300px",
                height: "auto",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              <ul
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#333",
                  padding: "10px",
                }}
              >
                {item.info.map((infoItem, infoIndex) => (
                  <li key={infoIndex}>{infoItem}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Roedores;
