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

      <div style={{ marginTop: "90px", textAlign: "center", position: "relative" }}>
        <img
          src="src/assets/img/Roedores.img/fundoImagem.png"
          alt="Fundo Verde"
          style={{ width: "2037px", height: "600px" }}
        />
        <img
          src="src/assets/img/Roedores.img/coelhos.png" 
          alt="coelho"
          style={{
            position: "absolute",
            top: "-50px",
            left: "50%",
            width: "1200px",
            height: "600px",
           marginLeft:"-150px",
          }}
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
                "Ingredientes: Cenoura desidratada, vegetais e grãos",
                "Tamanho: 1,2kg",
                "Idade: Adultos",
                "Preço: 103,90",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/Racao-Nutropica-para-Porquinho-da-India-Super-Premium-12kg.png",
              alt: "Ração 4",
              info: [
                "Ração Nutrópica para porquinhos-da-índia",
                "Ingredientes: Feno, ervilha, alfafa",
                "Tamanho:1,2kg",
                "Idade: Adulto",
                "Preço: 95,90",
              ],
            },
            {
              src: "src/assets/img/Roedores.img/HAMSTER-MUESLI-300---F.webp",
              alt: "Ração 5",
              info: [
                "Ração Muesli para hamsters",
                "Ingredientes: Grãos, sementes, frutas secas",
                "Tamanho:300g",
                "Idade: Adultos e sênior",
                "Preço: 39,90",
              ],
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "320px",
                height: "auto",
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
                alt={item.alt}
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
              <ul
                style={{
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#333",
                  padding: "10px",
                  listStyleType: "none",
                }}
              >
                {item.info.map((infoItem, infoIndex) => (
                  <li key={infoIndex}>
                    {infoIndex === 0 ? ( // Nome do produto (primeiro item) em negrito
                      <strong>{infoItem}</strong>
                    ) : infoItem.trim().startsWith("Ingredientes:") ? (
                      <>
                        <strong>Ingredientes:</strong> {infoItem.replace("Ingredientes:", "").trim()}
                      </>
                    ) : infoItem.trim().startsWith("Tamanho:") ? (
                      <>
                        <strong>Tamanho:</strong> {infoItem.replace("Tamanho:", "").trim()}
                      </>
                    ) : infoItem.trim().startsWith("Idade:") ? (
                      <>
                        <strong>Idade:</strong> {infoItem.replace("Idade:", "").trim()}
                      </>
                    ) : infoItem.trim().startsWith("Preço:") ? (
                      <span style={{ fontWeight: "bold", color: "red" }}>{infoItem}</span>
                    ) : (
                      infoItem
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* PETISCOS */}
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
            PETISCOS:
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
                src: "src/assets/img/Roedores.img/Petiscos-Funny-Bunny-18kg.png",
                alt: "Petisco 1",
                info: [
                  "Funny Bunny Delícias da Horta Supra",
                  "Ingredientes: Vegetais e grãos",
                  "Tamanho: 1,8kg",
                  "Idade: Todas as idades",
                  "Preço: 52,90",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Petiscos2-Funny-Bunny-Blend-500g.png",
                alt: "Petisco 2",
                info: [
                  " Funny Bunny Roedores Blend Supra",
                  "Ingredientes: Vegetais e frutas secas",
                  "Tamanho: 500g",
                  "Idade: Todas as idades",
                  "Preço: 18,76",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Petisco3_hamster_sticks_200g_casa_do_produtor.webp",
                alt: "Petisco 3",
                info: [
                  " Alcon Hamster Sticks Para Pequenos Roedores ",
                  "Ingredientes:Cereais,cenoura desidratada e milho",
                  "Tamanho: 200g",
                  "Idade: Adultos",
                  "Preço: 18,90",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Petisco4.jpg",
                alt: "Petisco 4",
                info: [
                  "Petisco Aves da Mata Biscotto Rodente Para Roedores",
                  "Ingredientes:Cereais e sementes naturais ",
                  "Tamanho: 20g",
                  "Idade:Todas as idades ",
                  "Preço: 14,99",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Petisco5.jpg",
                alt: "Petisco  5",
                info: [
                  "Biscoito Flower Seeds",
                  "Ingredientes:Amendoin e sementes ",
                  "Tamanho: 80g",
                  "Idade:Filhotes",
                  "Preço:29,90 ",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: "320px",
                  height: "auto",
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
                  alt={item.alt}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <ul
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#333",
                    padding: "10px",
                    listStyleType: "none",
                  }}
                >
                  {item.info.map((infoItem, infoIndex) => (
                    <li key={infoIndex}>
                      {infoIndex === 0 ? ( // Nome do produto (primeiro item) em negrito
                        <strong>{infoItem}</strong>
                      ) : infoItem.trim().startsWith("Ingredientes:") ? (
                        <>
                          <strong>Ingredientes:</strong> {infoItem.replace("Ingredientes:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Tamanho:") ? (
                        <>
                          <strong>Tamanho:</strong> {infoItem.replace("Tamanho:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Idade:") ? (
                        <>
                          <strong>Idade:</strong> {infoItem.replace("Idade:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Preço:") ? (
                        <span style={{ fontWeight: "bold", color: "red" }}>{infoItem}</span>
                      ) : (
                        infoItem
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
           {/* ACESSÓRIOS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            padding: "20px",
          }}
        > <h1
        style={{
          color: "#FFBD00",
          fontFamily: "Yeseva One",
          fontSize: "70px",
          marginBottom: "20px",
          marginRight: "1300px",
        }}
      >
        ACESSÓRIOS:
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
                src: "src/assets/img/Roedores.img/casinha-para-mini-coelho-e-porquinho-da-india-chinchila.webp",
                alt: "Acessorio 1",
                info: [
                  "Casinha Para Mini Coelho E Porquinho Da Índia Chinchila",
                  "Preço: 179,99",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Gaiola2.jpg",
                alt: "Acessorio 2",
                info: [
                  " Gaiola Hamster Tubo Super Luxo 3 Andares Diversão Durável ",
                  "Preço: 189,99",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Gaiola3.jpg",
                alt: "Acessorio 3",
                info: [
                  " Gaiola Hamster Roedores 2 Andares Teto Plástico Conforto Qualidade ",
                  "Preço: 109,99",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/kit-casinha-porta-feno-e-brinquedo-para-mini-coelhos.webp",
                alt: "Acessorio 4",
                info: [
                  "Kit Casinha Porta Feno E Brinquedo Para Mini Coelhos",
                  "Preço: 78,90",
                ],
              },
              {
                src: "src/assets/img/Roedores.img/Acessorio5.jpg",
                alt: "Acessorio  5",
                info: [
                  "Golden Pets Carretel Médio brinquedo para roedores totem",
                  "Preço:69,90 ",
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  width: "320px",
                  height: "auto",
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
                  alt={item.alt}
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <ul
                  style={{
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#333",
                    padding: "10px",
                    listStyleType: "none",
                  }}
                >
                  {item.info.map((infoItem, infoIndex) => (
                    <li key={infoIndex}>
                      {infoIndex === 0 ? ( // Nome do produto (primeiro item) em negrito
                        <strong>{infoItem}</strong>
                      ) : infoItem.trim().startsWith("Ingredientes:") ? (
                        <>
                          <strong>Ingredientes:</strong> {infoItem.replace("Ingredientes:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Tamanho:") ? (
                        <>
                          <strong>Tamanho:</strong> {infoItem.replace("Tamanho:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Idade:") ? (
                        <>
                          <strong>Idade:</strong> {infoItem.replace("Idade:", "").trim()}
                        </>
                      ) : infoItem.trim().startsWith("Preço:") ? (
                        <span style={{ fontWeight: "bold", color: "red" }}>{infoItem}</span>
                      ) : (
                        infoItem
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Roedores;

