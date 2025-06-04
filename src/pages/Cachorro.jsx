import React, { useEffect, useRef, useState } from "react";
import axios from "axios"; // Importa Axios para chamadas HTTP

const Cachorro = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de busca
  const [dadosRacao, setDadosRacao] = useState([]); // Estado para armazenar os dados da API
  const [dadosPetisco, setDadosPetisco] = useState([]); // Estado para armazenar os dados da API
  const [dadosBrinquedo, setDadosBrinquedo] = useState([]); // Estado para armazenar os dados da API
  const inputRef = useRef(null); // Referência para o campo de busca

  // Função de busca
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando por:", searchTerm);
  };

  // Chamada à API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [racoesRes, petiscosRes, brinquedosRes] = await Promise.all([
          axios.get("https://localhost:7040/api/Cachorro/racoes"),
          axios.get("https://localhost:7040/api/Cachorro/petiscos"),
          axios.get("https://localhost:7040/api/Cachorro/brinquedos"),
        ]);

        setDadosRacao(racoesRes.data);
        setDadosPetisco(petiscosRes.data);
        setDadosBrinquedo(brinquedosRes.data);

        console.log("Rações:", racoesRes.data);
        console.log("Petiscos:", petiscosRes.data);
        console.log("Brinquedos:", brinquedosRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchData();
  }, []);

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

      {/* Imagem do cachorro */}
      <div style={{ marginTop: "90px", textAlign: "center" }}>
        <img
          src="src/assets/img/Catioro.img/dogs.png"
          alt="Cachorro"
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
              src: "public/img/Catioro.img/ração.png",
              nome: "Origens Premium",
              ingredientes: "Carne e Frango",
              tamanho: "10,1kg",
              idade: "Adulto",
              preco: "R$ 185,90",
            },
            {
              src: "public/img/Catioro.img/ração1.png",
              nome: "Special Golden",
              ingredientes: "Frango e Carne",
              tamanho: "15 kg",
              idade: "Adulto",
              preco: "R$ 180,90",
            },
            {
              src: "public/img/Catioro.img/ração2.png",
              nome: "Royal Canin",
              ingredientes: "Carne",
              tamanho: "10,1kg",
              idade: "Adulto",
              preco: "R$ 175,90",
            },
            {
              src: "public/img/Catioro.img/ração3.png",
              nome: "Guabi Natural",
              ingredientes: "Cordeiro e Aveia",
              tamanho: "12 kg",
              idade: "Adulto",
              preco: "R$ 269,90",
            },
            {
              src: "public/img/Catioro.img/ração4.png",
              nome: "Dog Chow",
              ingredientes: "Frango, Carne e Arroz",
              tamanho: "15 kg",
              idade: "Adulto",
              preco: "R$ 224,90",
            },
            {
              src: "public/img/Catioro.img/ração5.png",
              nome: "Premier Pet",
              ingredientes: "Carne e Frango",
              tamanho: "15 kg",
              idade: "Adulto",
              preco: "R$ 199,90",
            },
            {
              id: 1,
              nome: "Ração Premium",
              preco: "R$ 50,00"
            },
            {
              id: 2,
              nome: "Ração Standard",
              preco: "R$ 30,00"
            }
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
              <p
                style={{ fontSize: "14px", margin: "5px 0", color: "#FF0000" }}
              >
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
              src: "public/img/Catioro.img/bifinho.jpg",
              nome: "Bifinho Petiscão",
              sabor: "Carne",
              tamanho: "300g",
              preco: "R$ 26,90",
            },
            {
              src: "public/img/Catioro.img/biscoito.jpg",
              nome: "PetDog Biscoito",
              sabor: "mix de trigo",
              tamanho: "1 kg",
              preco: "R$ 30,27",
            },
            {
              src: "public/img/Catioro.img/frangonatural.jpg",
              nome: "WOW Frango Natural",
              sabor: "Frango",
              tamanho: "50g",
              preco: "R$ 25,50",
            },
            {
              src: "public/img/Catioro.img/pulmãosuino.jpg",
              nome: "LUV Pulmão Suíno",
              sabor: "Suíno",
              tamanho: "80g",
              preco: "R$ 48,90",
            },
            {
              src: "public/img/Catioro.img/osso.png",
              nome: "Osso Natural",
              sabor: "Carne",
              tamanho: "900g",
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
              <h3
                style={{
                  fontSize: "18px",
                  margin: "5px 0",
                  textAlign: "center",
                }}
              >
                {item.nome}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  margin: "5px 0",
                  textAlign: "center",
                }}
              >
                <strong>Sabor:</strong> {item.sabor}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  margin: "5px 0",
                  textAlign: "center",
                }}
              >
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

        {/*"AREIA" */}
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

        {/* Imagens e descrições das areias */}
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
              src: "src/assets/img/Catioro.img/bolinha.png",
              nome: "Bolinha plastico colorida",
              tipo: "Plástico",
              peso: "100g",
              preco: "R$ 20,90",
            },
            {
              src: "src/assets/img/Catioro.img/kit.jpg",
              nome: "Kit de Brinquedos",
              tipo: "Diversos",
              peso: "100g",
              preco: "R$ 29,99",
            },
            {
              src: "src/assets/img/Catioro.img/peluciaMelancia.jpg",
              nome: "Pelucia Melancia",
              tipo: "Pelúcia macia",
              peso: "600g",
              preco: "R$ 39,99",
            },
            {
              src: "src/assets/img/Catioro.img/peluciaPeixe.jpg",
              nome: "Pelucia Peixe",
              tipo: "Pelúcia macia",
              peso: "600g",
              preco: "R$ 39,99",
            },
            {
              src: "src/assets/img/Catioro.img/puxador.jpg",
              nome: "Puxador de Corda",
              tipo: "Corda resistente e borracha",
              peso: "500g",
              preco: "R$ 39,90",
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
                <h3 style={{ fontSize: "18px", margin: "5px 0" }}>
                  {item.nome}
                </h3>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Tipo:</strong> {item.tipo}
                </p>
                <p style={{ fontSize: "14px", margin: "5px 0" }}>
                  <strong>Peso:</strong> {item.peso}
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    margin: "5px 0",
                    color: "#FF0000",
                  }}
                >
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
