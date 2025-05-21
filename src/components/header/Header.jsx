import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Checa se o usuário está logado (por exemplo, após login ou cadastro)
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user); // true se existir user
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg header">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/img/logo.png"
            alt="Logo"
            className="logo"
            style={{ height: "90px" }}
          />
        </Link>

        {/* Barra de Pesquisa */}
        <div className="d-flex align-items-center mx-auto w-50">
          <form className="d-flex flex-grow-1 me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2 rounded-pill bg-light bg-opacity-75 border-0 shadow-sm"
              type="search"
              placeholder="Buscar"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{color:"transparent" }}
            />
            <button className="btn btn-light rounded-pill px-4"style={{color:"#CBB883"}} type="submit">
              Buscar
            </button>
          </form>

          {/* Ícone da sacola */}
          <Link to="/carrinho" className="text-light fs-4" title="Minha sacola">
            <i className="bi bi-handbag"></i>
          </Link>
        </div>

        {/* Autenticação */}
        {isAuthenticated ? (
          // Se logado, mostra só o ícone de perfil
          <Link
            to="/perfil"
            role="button"
            className="d-flex justify-content-center align-items-center text-decoration-none text-light"
            title="Meu perfil"
          >
            <i className="bi bi-person-circle fs-3"></i>
          </Link>
        ) : (
          // Se não logado, mostra Entrar e Cadastrar-se
          <>
            <Link
              to="/entrar"
              role="button"
              className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
            >
              <i className="bi bi-person-circle fs-3"></i>
              <div className="d-none d-md-flex flex-column m-0 w-50">
                <span className="h6 m-0 text-dark">Entrar</span>
              </div>
            </Link>
            <Link
              to="/cadastro"
              role="button"
              className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
            >
              <i className="bi bi-person-plus fs-3"></i>
              <div className="d-none d-md-flex flex-column m-0 w-50">
                <span className="h6 m-0 text-dark">Cadastrar-se</span>
              </div>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
