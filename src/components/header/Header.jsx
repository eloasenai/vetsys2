import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router"; // Corrigido de "react-router" para "react-router-dom"
import gatoecachorro from "../../assets/img/gatoecachorro.png";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Simula a autenticação após cadastro
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
      {/* Barra de pesquisa */}
      {/* <div className="search-bar">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Adicionado para atualizar o estado
        />
      </div> */}
      <div className="image-container" style={{ position: "relative" }}>
        <img
          src={gatoecachorro}
          alt="Descrição da imagem"
          style={{
            marginTop: "200px",
            marginLeft: "350px",
            height: "250px",
            borderRadius: "30px",
          }}
        />

        {/* Botões acima da imagem */}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          <button style={{ padding: "10px 20px", borderRadius: "5px" }}>
            Botão 1
          </button>
          <button style={{ padding: "10px 20px", borderRadius: "5px" }}>
            Botão 2
          </button>
          <button style={{ padding: "10px 20px", borderRadius: "5px" }}>
            Botão 3
          </button>
          <button style={{ padding: "10px 20px", borderRadius: "5px" }}>
            Botão 4
          </button>
          <button style={{ padding: "10px 20px", borderRadius: "5px" }}>
            Botão 5
          </button>
        </div>

        <div
          style={{
            position: "absolute",
            top: "151px",
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
      </div>
      -------------------
      <div className="d-flex justify-content-evenly gap-3 py-3">
        {["Gato", "Cachorro", "Pássaros", "Roedores", "Promoções"].map(
          (label) => (
            <Link
              key={label}
              to={`/${label.toLowerCase()}`}
              className="btn"
              style={{
                border: "1px solid black",
                borderRadius: "15px",
                padding: "20px 60px",
                backgroundImage: "./assets/images/botão.png",
                backgroundPosition: "center",
                backgroundColor: "white",
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
              }}
            >
              {label}
            </Link>
          )
        )}
      </div>
      ------------------
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
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg header">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="/assets/img/logo.png"
              alt="Logo"
              className="logo"
              style={{ height: "40px" }}
            />
          </Link>

          {/* Barra de Pesquisa */}
          <div className="d-flex align-items-center mx-auto w-50">
            <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2 rounded-pill shadow-sm"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  backgroundColor: "#0000001c",
                  border: "1px solid black", // Borda preta
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
