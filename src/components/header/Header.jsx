import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import gatoecachorro from "../../assets/img/gatoecachorro.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user"); // Corrigido o uso de `useEffect` (faltavam parênteses)
    setIsAuthenticated(!!user);
  }, []); // Adicionado array de dependências vazio para evitar loops infinitos

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove o usuário do localStorage
    setIsAuthenticated(false); // Atualiza o estado para não autenticado
    navigate("/"); // Redireciona para a página inicial
  };

  return (
    <header>
      <div className="d-flex justify-content-evenly gap-3 py-3 position-position-absolute">
        {["Gato", "Cachorro", "Pássaros", "Roedores", "Promoções"].map(
          (label) => (
            <Link
              key={label}
              to={`/${label.toLowerCase()}`}
              className="btn"
              style={{
                marginTop: "120px",
                borderRadius: "15px",
                padding: "0", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                position: "relative", // Define o contêiner como relativo
                textAlign: "center", // Centraliza o texto
              }}
            >
              <img
                src="src/assets/img/botão.png" 
                alt={label}
                style={{
                  width: "300px", 
                  height: "auto",
                  borderRadius: "15px", // Bordas arredondadas
                }}
              />
              <span
                style={{
                  position: "absolute", 
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", 
                  color: "black", 
                  fontSize: "20px", 
                }}
              >
                {label}
              </span>
            </Link>
          )
        )}
      </div>

      <div className="image-container" style={{ position: "relative" }}>
        <img
          src={gatoecachorro}
          alt="Descrição da imagem"
          style={{
            marginTop: "50px",
            marginLeft: "350px",
            height: "300px",
            borderRadius: "30px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "1750px",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "220px",
          right: "355px",
          width: "150px",
          height: "150px",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
          color: "#8ECEF2",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        20% off
      </div>

      <div className="image-container">
        {/* Blocos amarelos */}
        <div className="yellow-blocks">
          <div className="yellow-block">
            <i className="bi bi-truck"></i>
            <span>Frete grátis</span>
          </div>
          <div className="yellow-block">
            <i className="bi bi-credit-card-2-back-fill"></i>
            <span>Promoções</span>
          </div>
          <div className="yellow-block">
            <i className="bi bi-cart3"></i>
            <span>Até 10x sem juros</span>
          </div>
          <div className="yellow-block">
            <i className="bi bi-house-fill"></i>
            <span>Retire e troque na loja</span>
          </div>
        </div>

        <p className="" style={{fontSize:"30px", fontWeight:"bold", color: " black", marginLeft:"150px", marginTop:"90px"}}
        >Produtos para cachorro</p>
 <div className="new-image-container">
  <img
    src="src/assets/img/RacaoCachorro.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/BrinquedosCachorro.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/PetiscosCachorro.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/ColeirCachorro.png"
    alt="Nova Imagem" 
  />
  <img
    src="src/assets/img/FarmaciaCachorro.png"
    alt="Nova Imagem"
   
  />
</div>

<p className="" style={{fontSize:"30px", fontWeight:"bold", color: " black", marginLeft:"150px", marginTop:"90px"}}
        >Produtos para gato</p>
<div className="new-image-container">
  <img
    src="src/assets/img/RacaoGato.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/Areia.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/Petiscogato.png"
    alt="Nova Imagem"
  />
  <img
    src="src/assets/img/Arranhador.png"
    alt="Nova Imagem" 
  />
  <img
    src="src/assets/img/FarmaciaGato.png"
    alt="Nova Imagem"
   
  />
</div>

<p className="" style={{fontSize:"70px", marginTop:"90px", color:"#CBB883", textAlign:"center"}}
        >Nossa Linha</p>

<div className="custom-image-container">
  <img
    src="src/assets/img/SnackGato.png"
    className="custom-image"
    alt="Snack para Gato"
  />
<p className="custom-image-text">R$00,00</p>
     
  <img
    src="src/assets/img/KitPop.png"
    className="custom-image"
    alt="Kit Pop"
  />
<p className="custom-image-text">R$00,00</p>
      
  <img
    src="src/assets/img/ZenPet.png"
    className="custom-image"
    alt="Zen Pet"
  />
<p className="custom-image-text">R$00,00</p>
     
<img
  src="src/assets/img/Caixa.png"
  className="custom-image"
 alt="Caixa"
/>
<p className="custom-image-text">R$00,00</p>

<img
  src="src/assets/img/SpecialDog.png"
  className="custom-image"

  alt="SpecialDog"
/>
<p className="custom-image-text">R$00,00</p>
</div>



<button
    onClick={() => window.open("https://wa.me/5599999999999", "_blank")}
    style={{
      marginTop: "60px",
      padding: "50px 350px",
      backgroundImage: "url('src/assets/whats.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#48A771",
      border: "none",
      borderRadius: "20px",
      cursor: "pointer",
      fontSize: "36px",
      marginLeft:"400px"
    }}
  >
    Compre pelo WhatsApp
</button>

      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg header">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="src/assets/img/logo.png"
              alt="Logo"
              className="logo"
              width={50}
              style={{ height: "40px" }}
            />
          </Link>

          {/* Barra de Pesquisa */}
          <div className="d-flex align-items-center mx-auto w-50">
            <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2 rounded-pill bg-light bg-opacity-75 shadow-sm"
                type="search"
                placeholder="O que seu pet precisa?"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backdropFilter: "blur(4px)",
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

            {/* Ícone da sacola */}
            <div className="d-flex align-items-center gap-3 fs-4 text-dark">
              <Link to="/contato" title="Contato" className="text-dark">
                <i className="bi bi-telephone"></i>
              </Link>
              <Link to="/favoritos" title="Favoritos" className="text-dark">
                <i className="bi bi-suit-heart"></i>
              </Link>
              <Link to="/carrinho" title="Sacola" className="text-dark">
                <i className="bi bi-handbag"></i>
              </Link>
            </div>
          </div>

          {/* Cadastro */}
          <Link
            to="/cadastro"
            className="text-light fs-4"
            title="Cadastro"
          ></Link>

          {/* Autenticação */}
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              <Link
                to="/perfil"
                role="button"
                className="d-flex justify-content-center align-items-center text-decoration-none text-light"
                title="Meu perfil"
              ></Link>
              <button
                className="btn btn-outline-light ms-3"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/entrar"
                role="button"
                className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
              >
                <i className="bi bi-person-circle fs-3 text-dark"></i>
                <div className="d-none d-md-flex flex-column m-0 w-50">
                  <span className="h6 m-0 text-dark">Entrar</span>
                </div>
              </Link>
              <Link
                to="/cadastro"
                role="button"
                className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
              >
                <div className="d-none d-md-flex flex-column m-5 w-50">
                  <span className="h6 m-0 text-dark">Cadastrar-se</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
