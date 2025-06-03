import React, { useRef, useState } from "react";

const Passaro = () => {
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

      
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/Passaros.img/aves.png"
          alt="Roedores"
          style={{ width: "2550px", height: "1000px" }}
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
    flexWrap: "nowrap", // Impede que as imagens quebrem para a próxima linha
    gap: "20px",
    justifyContent: "center",
  }}
>
  {[
    {
      src: "src/assets/img/Passaros.img/racao1.webp",
      nome: "Ração Nutrópica Sementes e Extrusados Natural para Calopsitass",
      ingredientes: " Sementes e grãos selecionados",
      tamanho: "300g",
       idade: "Adulto",
      Preco: "39,90"
    },
    {
      src: "src/assets/img/Passaros.img/Racao2.png",
      nome: "Ração Nutrópica para Calopsita Seleção Natural Sementes e Extrusado Mini Bits",
      ingredientes: "Grãos integrais, sementes e  mini extrusados",
      tamanho: "300g",
       idade: "Adulto",
      Preco: "34,90"
    },
    {
      src: "src/assets/img/Passaros.img/Racao3.webp",
      nome: "Ração Nutrópica para Calopsitas com Frutas",
      ingredientes: "Frutas",
      tamanho: "300g",
      idade: "Adulto",
      Preco: "39,90"
    },
    {
      src: "src/assets/img/Passaros.img/Racao4.webp",
      nome: "Ração Nutrópica para Agapornis com Frutas",
      ingredientes: "Extrusados e frutas",
      tamanho: "300g",
       idade: "Adulto",
      Preco: "39,90"
    },
    {
      src: "src/assets/img/Passaros.img/Racao5.webp",
      nome: "Ração para Calopsitas Integral Amigos do Louro José Megazoo",
      ingredientes: "Sementes",
      tamanho: "350g",
       idade: "Adulto",
      Preco: "34,90"
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
        src={item.src}
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



<div 
  style={{
    display: "flex",
    flexWrap: "nowrap", // Impede que as imagens quebrem para a próxima linha
    gap: "20px",
    justifyContent: "center",
  }}
>
  {[
    {
      src: "src/assets/img/Passaros.img/Petisco1.webp",
      nome: "Biscoito para Papagaios e Araras Biscottini Pet",
      ingredientes: "Cereias, vitaminas e mel",
      tamanho: "80g",
      idade: "Adulto",
      Preco: "30,500"
    },
    {
      src: "src/assets/img/Passaros.img/Petisco2.webp",
      nome: "Biscoito para Calopsitas e Periquitos Biscottini Pet",
      ingredientes: "Cereais",
      tamanho: "80g",
      idade: "Adulto",
      Preco: "30,50"
    },
    {
      src: "src/assets/img/Passaros.img/petisco3.webp",
      nome: "Bastão Calopsita e Agapornis Vitale ",
      ingredientes: "Sementes e grãos",
      tamanho: "90g",
      idade: "Adulto",
      Preco: "22,50"
    },
    {
      src: "src/assets/img/Passaros.img/Petisco4.png",
      nome: "Stick Natural Megazoo Clássico para Calopsitas ",
      ingredientes: "Grãos, sementes e pimenta rosa",
      tamanho: "150g",
      idade: "Adulto",
      Preco: "36,90"
    },
    {
      src: "src/assets/img/Passaros.img/Petisco5.png",
      nome: "Stick Natural Megazoo com Ervas, Mel e Ovos para Calopsita",
      ingredientes: "Sementes, ervas, mel e ovos",
      tamanho: "120g",
      idade: "Adulto",
      Preco: "35,90"
    },
  ].map((item, index) => (
    <div 
      key={index} 
      style={{
        textAlign: "center",
        width: "200px", // Largura do quadrado
        padding: "15px", // Espaçamento interno
        backgroundColor: "#fff", // Fundo branco
        borderRadius: "10px", // Bordas arredondadas
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Sombra para destaque
      }}
    >
      <img
        src={item.src}
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

  









      </div>
      
      
    </>
  );
};

export default Passaro;
