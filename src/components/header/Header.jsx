import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; 
import gatoecachorro from "../../assets/img/gatoecachorro.png";


const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Substitui useHistory

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <header>
      {/* Barra de pesquisa */}
      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." />
      </div>

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

        <div
          style={{
            position: "absolute",
            top: "151px",
            right: "250px",
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

      <div className="image-container">
        {/* Blocos amarelos */}
        <div className="yellow-blocks">
          <div className="yellow-block">
          <i class="bi bi-truck"></i>
            <span>Frete grátis</span>
          </div>
          <div className="yellow-block">
          <i class="bi bi-credit-card-2-back-fill"></i>
            <span>Promoções</span>
          </div>
          <div className="yellow-block">
          <i class="bi bi-cart3"></i>
            <span>Até 10x sem juros</span>
          </div>
          <div className="yellow-block">
          <i class="bi bi-house-fill"></i>
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
          <div className="d-flex align-items-center mx-auto w-50 ">
            <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
              <input
                className="form-control me-2 rounded-pill bg-light bg-opacity-75 border-0 shadow-sm"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ backdropFilter: "blur(4px)" }}
              />
              <button
                className="btn btn-outline-light rounded-pill px-4"
                type="submit"
              >
                Buscar
              </button>
            </form>

            {/* Ícone da sacola */}
            <Link
              to="/carrinho"
              className="text-light fs-4"
              title="Minha sacola"
            >
              <i className="bi bi-handbag"></i>
            </Link>
          </div>

          {/* Cadastro */}
          <Link
            to="/cadastro"
            className="text-light fs-4"
            title="Cadastro"
          >
            <i className="bi bi-person"></i>
          </Link>
          
        </div>
       
      </nav>
    </header>
  );
};

export default Header;

