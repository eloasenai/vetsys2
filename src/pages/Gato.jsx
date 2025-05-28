import React, { useRef, useState } from "react";

const Gato = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const scrollRef = useRef(null);

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
          style={{ height: "95px", cursor: "pointer", width: "95px" }}
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
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/gato.img/Gato.png"
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

        {/* Imagens das rações */}
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
              src: "raçãogato1.png",
              nome: "GoldeN Pet Premium",
              ingredientes: "Frango, abóbora e alecrim",
              tamanho: "10,1kg",
              idade: "Adulto",
              preco: "R$ 99,90",
            },
            {
              src: "raçãogato2.png",
              nome: "GoldeN Pet Premium",
              ingredientes: "Carne bovina, vegetais, sem conservantes",
              tamanho: "10,1kg",
              idade: "Filhote",
              preco: "R$ 129,90",
            },
            {
              src: "raçãogato3.png",
              nome: "Quatree Supreme",
              ingredientes: "Salmão, batata doce, ômega 3",
              tamanho: "10,1kg",
              idade: "Adulto",
              preco: "R$ 89,90",
            },
            {
              src: "raçãogato4.png",
              nome: "GoldeN Pet Natural",
              ingredientes: "Frango, fibras, baixo teor de gordura",
              tamanho: "10,1kg",
              idade: "Sênior",
              preco: "R$ 109,90",
            },
            {
              src: "raçãogato5.png",
              nome: "Friskies",
              ingredientes: "Atum, Salmão e camarão",
              tamanho: "1kg",
              idade: "Adulto",
              preco: "R$ 29,90",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "15px",
              }}
            >
              <img
                src={`src/assets/img/gato.img/${item.src}`}
                alt={item.nome}
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{item.nome}</h3>
              <p style={{ fontSize: "14px", margin: "5px 0" }}>
                <strong>Ingredientes:</strong> {item.ingredientes}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0" }}>
                <strong>Tamanho:</strong> {item.tamanho}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0" }}>
                <strong>Idade:</strong> {item.idade}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0", color: "#FF0000" }}>
                <strong>Preço:</strong> {item.preco}
              </p>
            </div>
          ))}
        </div>

        {/* PETISCO */}
        <h1
          style={{
            color: "#FFBD00",
            fontFamily: "Yeseva One",
            fontSize: "70px",
            marginBottom: "20px",
            marginRight: "1300px",
            marginTop: "250px",
          }}
        >
          PETISCO:
        </h1>

        {/* Petiscos com rolagem horizontal */}
        <div
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            width: "100%",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              gap: "20px",
              padding: "20px",
            }}
          >
            {[
              {
                src: "petiscogato1.png",
                nome: "Whiskas",
                sabor: "Frango",
                tamanho: "500g",
                preco: "R$ 15,90",
              },
              {
                src: "petiscogato2.png",
                nome: "Friskies",
                sabor: "Carne bovina",
                tamanho: "300g",
                preco: "R$ 13,50",
              },
              {
                src: "petiscogato3.png",
                nome: "Cat Licious",
                sabor: "Salmão",
                tamanho: "400g",
                preco: "R$ 16,90",
              },
              {
                src: "petiscogato4.png",
                nome: "Dreamies",
                sabor: "Vegetais",
                tamanho: "350g",
                preco: "R$ 14,20",
              },
              {
                src: "petiscogato5.png",
                nome: "Pet Pop",
                sabor: "Atum",
                tamanho: "600g",
                preco: "R$ 17,90",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: "320px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <img
                  src={`src/assets/img/gato.img/${item.src}`}
                  alt={item.nome}
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
                <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{item.nome}</h3>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Sabor:</strong> {item.sabor}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Tamanho:</strong> {item.tamanho}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0", color: "#FF0000" }}>
                  <strong>Preço:</strong> {item.preco}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gato;
