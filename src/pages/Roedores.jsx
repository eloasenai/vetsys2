import React, { useRef, useState } from "react";

const Cachorro = () => {
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

      {/* Imagem do roedores */}
      <div style={{ marginTop: "2px", textAlign: "center" }}>
        <img
          src="src/assets/img/Roedores.img/roedores.png"
          alt="Roedores"
          style={{ width: "2020px", height: "1000px" }}
        />
      </div>

      {/* RAÇÃO */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "40px",
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
          RAÇÃO
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
              src: "src/assets/img/Roedores.img/racao1.webp",
              nome: "Lillebro Ração para ratos e camundongos",
              ingredientes: "Grãos e sementes selecionadas",
              tamanho: "1,4kg",
              idade: "Adulto",
              preco: "R$ 38,72",
            },
            {
              src: "src/assets/img/Roedores.img/racao2.webp",
              nome: "Brit Animals Rat",
              ingredientes: "Frutas e grãos",
              tamanho: "300 g",
              idade: "Adulto",
              preco: "R$ 18,55",
            },
            {
              src: "src/assets/img/Roedores.img/racao6.webp",
              nome: "Versele-Laga Hamster e Gerbil food",
              ingredientes: "Maçã, frango e ervilhas",
              tamanho: "100g",
              idade: "Adulto",
              preco: "R$ 75,90",
            },
            {
              src: "src/assets/img/Roedores.img/racao3.webp",
              nome: "Funny Bunny",
              ingredientes: "Vegetais",
              tamanho: "500g",
              idade: "Adulto",
              preco: "R$ 13,98",
            },
            {
              src: "src/assets/img/Roedores.img/racao5.webp",
              nome: "Cunipic ração premium para ratos",
              ingredientes: "Mix de sementes, frutas e vegetais",
              tamanho: "600g",
              idade: "Adulto",
              preco: "R$ 56,82",
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
            textAlign: "center", // Centraliza o título
            marginTop: "100px",
            marginRight: "1300px", // Ajusta a margem direita para alinhar com o título da ração
          }}
        >
          PETISCO:
        </h1>

        {/* Petiscos com rolagem horizontal */}
        <div
          style={{
            display: "flex", // Flexbox para alinhar os itens
            justifyContent: "center", // Centraliza os itens horizontalmente
            flexWrap: "wrap", // Permite quebra de linha se necessário
            gap: "20px", // Espaçamento entre os itens
            padding: "20px",
            marginTop: "20px",
          }}
        >
          {[
            {
              src: "src/assets/img/Roedores.img/petisco1.webp",
              nome: "JR Farm Petisco para roedores",
              sabor: "Vegetais desidratados",
              tamanho: "400g",
              preco: "R$ 30,90",
            },
            {
              src: "src/assets/img/Roedores.img/petisco2.webp",
              nome: "Martin Roedores Petisco",
              sabor: "mix de petiscos",
              tamanho: "400g",
              preco: "R$ 17,90",
            },
            {
              src: "src/assets/img/Roedores.img/petisco3.webp",
              nome: "Gimb drops mix",
              sabor: "Mix de vegetais",
              tamanho: "300g",
              preco: "R$ 19,33",
            },
            {
              src: "src/assets/img/Roedores.img/petisco4.webp",
              nome: "JR Farm Petisco para roedores",
              sabor: "Mix de frutas",
              tamanho: "400g",
              preco: "R$ 30,90",
            },
            {
              src: "src/assets/img/Roedores.img/petisco6.webp",
              nome: "Rig Cookies para roedores",
              sabor: "maçã",
              tamanho: "100g",
              preco: "R$ 18,03",
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
                alignItems: "center", // Centraliza os itens dentro do card
                padding: "15px",
              }}
            >
              <img
                src={`src/assets/img/gato.img/${item.src}`}
                alt={item.nome}
                style={{
                  width: "100%", // Ajusta a largura da imagem ao card
                  height: "200px", // Define uma altura fixa
                  objectFit: "cover", // Mantém a proporção da imagem
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <h3 style={{ fontSize: "18px", margin: "5px 0", textAlign: "center" }}>
                {item.nome}
              </h3>
              <p style={{ fontSize: "14px", margin: "5px 0", textAlign: "center" }}>
                <strong>Sabor:</strong> {item.sabor}
              </p>
              <p style={{ fontSize: "14px", margin: "5px 0", textAlign: "center" }}>
                <strong>Tamanho:</strong> {item.tamanho}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  margin: "5px 0",
                  color: "#FF0000",
                  textAlign: "center",
                }}
              >
                <strong>Preço:</strong> {item.preco}
              </p>
            </div>
          ))}
        </div>

        {/*"ACESSÓRIOS" */}
        <h1
          style={{
            color: "#FFBD00",
            fontFamily: "Yeseva One",
            fontSize: "70px",
            marginBottom: "20px",
            marginRight: "1100px",
            marginTop: "100px",
          }}
        >
          BRINQUEDOS:
        </h1>

        {/* Imagens e descrições dos acessorios */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: "20px",
            
          }}
        >
          {[
            {
              src: "src/assets/img/Roedores.img/acessc1.webp",
              nome: "casinha para roedores",
              tipo: "Madeira",
              peso: "500g",
              preco: "R$ 70,90",
            },
            {
              src: "src/assets/img/Roedores.img/acessc2.webp",
              nome: "Kit para roedores",
              tipo: "plastico",
              peso: "300g",
              preco: "R$ 24,90",
            },
            {
              src: "src/assets/img/Roedores.img/acessc3.webp",
              nome: "Brinquedo de madeira para roedores",
              tipo: "Madeira",
              peso: "300g",
              preco: "R$ 25,50",
            },
            {
              src: "src/assets/img/Roedores.img/acessc4.webp",
              nome: "Brinquedo tunel de madeira para roedores",
              tipo: "Madeira",
              peso: "300g",
              preco: "R$ 37,99",
            },
            {
              src: "src/assets/img/Roedores.img/acessc5.webp",
              nome: "bebedouro para roedores",
              tipo: "Plástico",
              peso: "400g",
              preco: "R$ 14,00",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para destacar o quadrado
                display: "flex",
                flexDirection: "column", // Alinha imagem e descrição verticalmente
                alignItems: "center",
                padding: "20px",
                marginBottom: "200px", // Espaçamento entre os quadrados
                }}
            >
              {/* Imagem da areia */}
              <img
                src={`src/assets/img/gato.img/${item.src}`}
                alt={item.nome}
                style={{
                  width: "280px",
                  height: "auto",
                  borderRadius: "5px",
                  marginBottom: "10px",
                  
                }}
              />
              {/* Descrição dentro do quadrado */}
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "18px", margin: "5px 0" }}>{item.nome}</h3>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Tipo:</strong> {item.tipo}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Peso:</strong> {item.peso}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0", color: "#FF0000" }}>
                  <strong>Preço:</strong> {item.preco}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cachorro;
