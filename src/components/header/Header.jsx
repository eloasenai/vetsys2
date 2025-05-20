import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
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

        {/* Barra de pesquisa */}
        <form className="d-flex mx-auto w-50" role="search">
          <input
            className="form-control me-2 rounded-pill bg-light bg-opacity-75 border-0 shadow-sm"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            style={{ backdropFilter: "blur(4px)" }}
          />
          <button
            className="btn btn-outline-light rounded-pill px-4"
            type="submit"
          >
            Buscar
          </button>
        </form>

        {/* Login */}
        <Link
          to="/login"
          role="button"
          className="d-flex gap-3 justify-content-center align-items-center text-decoration-none text-light"
        >
          <i className="bi bi-person-circle fs-3"></i>
          <div className="d-none d-md-flex flex-column m-0 w-50">
            <span className="h6 m-0 text-dark">Olá, faça seu login </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
