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

      {/* Imagem do roedores */}
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/Passaros.img/aves.png"
          alt="Roedores"
          style={{
             width: "2510px",
              height: "1100px" }}
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
              src: "src/assets/img/Passaros.img/racaopassaro5.webp",
              nome: "Papinha para Lóris Nutropica",
              ingredientes: "frutas e aveia",
              tamanho: "500g",
              idade: "filhote",
              preco: "R$ 80,90",
            },
            {
              src: "src/assets/img/Passaros.img/racaopassaro3.webp",
              nome: "Nutropica seleção natural Periquito Australiano",
              ingredientes: "Sementes e grãos selecionadas",
              tamanho: "300 g",
              idade: "Adulto",
              preco: "R$ 29,90",
            },
            {
              src: "src/assets/img/Passaros.img/racaopassaro2.webp",
              nome: "Extrusados nutiropica para canários",
              ingredientes: "Extrusados com sementes e frutas",
              tamanho: "300g",
              idade: "Adulto",
              preco: "R$ 36,90",
            },
            {
              src: "src/assets/img/Passaros.img/raçaopassaro1.webp",
              nome: "extrusados nutiropica para papagaios",
              ingredientes: "Extrusados com sementes e frutas",
              tamanho: "300g",
              idade: "Adulto",
              preco: "R$ 129,90",
            },
            {
              src: "src/assets/img/Passaros.img/racao6.webp",
              nome: "papinha psitacideos Nutropica",
              ingredientes: "Mix frutas",
              tamanho: "500g",
              idade: "filhote",
              preco: "R$ 74,90",
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
              src: "src/assets/img/Passaros.img/petiscopass6.webp ",
              nome: "Papa de ovo",
              sabor: "ovo, milho e sementes",
              tamanho: "250g",
              preco: "R$ 17,90",
            },
            {
              src: "src/assets/img/Passaros.img/petiscopass1.webp",
              nome: "Barritas",
              sabor: "mix de sementes e coco",
              tamanho: "70g",
              preco: "R$ 19,90",
            },
            {
              src: "src/assets/img/Passaros.img/petiscopass4.webp",
              nome: "Papa de frutas",
              sabor: "Mix de frutas",
              tamanho: "250g",
              preco: "R$ 13,70",
            },
            {
              src: "src/assets/img/Passaros.img/petiscopass3.webp",
              nome: "Barritas",
              sabor: "Mix de sementes e coco",
              tamanho: "70g",
              preco: "R$ 19,90",
            },
            {
              src: "src/assets/img/Passaros.img/petiscopass2.webp",
              nome: "Tenebrios desidratados",
              sabor: "Insetos desidratados",
              tamanho: "25g",
              preco: "R$ 18,00",
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

        {/*"ACESSÓRIOs" */}
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
              src: "src/assets/img/Passaros.img/BrinquedoPass4.png",
              nome: "escadinha de madeira para aves",
              tipo: "Madeira",
              peso: "400g",
              preco: "R$ 27,90",
            },
            {
              src: "src/assets/img/Passaros.img/BrinquedoPass2.png",
              nome: "argolas para aves",
              tipo: "plastico",
              peso: "300g",
              preco: "R$ 24,90",
            },
            {
              src: "src/assets/img/Passaros.img/BrinquedoPass1.png",
              nome: "puleiro de madeira para aves",
              tipo: "Madeira",
              peso: "300g",
              preco: "R$ 24,90",
            },
            {
              src: "src/assets/img/Roedores.img/acessc4.webp",
              nome: "kit puleiro para aves",
              tipo: "Madeira",
              peso: "500g",
              preco: "R$ 67,99",
            },
            {
              src: "src/assets/img/Passaros.img/brincpass1.webp",
              nome: "Brinquedo de corda para aves",
              tipo: "Corda",
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

export default Passaro;
