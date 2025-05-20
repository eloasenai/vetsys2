
import React, { useState } from "react";
import { useNavigate } from "react-router"; // Correção feita aqui

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devcadastro", JSON.stringify({ nome, email }));
      navigate("/"); // redireciona para a tela inicial
    }
  };

  return (
    <div>
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
        style={{ marginLeft: "700px", width: "70%" }}
      >
        {/* Imagem no topo */}
        <img
          src="/assets/img/login.png"
          alt="Cadastro"
          style={{ width: "150px", marginBottom: "20px" }}
        />

        <div className="card w-50">
          <div className="card-body">
            <h5 className="card-title">
              Bem-Vindo ao VetSys! <br />
              Vamos fazer seu cadastro
            </h5>
            <form onSubmit={handleCadastro}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
