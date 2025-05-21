import React, { useState } from "react";
import { useNavigate } from "react-router";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarsenha] = useState("");

  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (nome && sobrenome && email && senha && confirmarsenha) {
      localStorage.setItem(
        "devcadastro",
        JSON.stringify({ nome, sobrenome, email, senha, confirmarsenha })
      );
      navigate("/"); // redireciona para a tela inicial
    }
  };

  return (
    <div className="cadastro-container">
      {/* Imagem ao lado do formulário */}
      <div
        className="cadastro-image"
        style={{ width: "100%", marginLeft: "20%", borderRadius: "80%" }}
      >
        <img
          src="src/assets/img/cadastro.png" // Substitua pelo caminho da sua imagem
          alt="Cadastro"
        />
      </div>
      {/* Formulário de cadastro */}
      <div className="cadastro-form">
        <div
          className="card"
          style={{
            width: "170%",
            marginLeft: "-80%",
            borderColor: "black",
            borderRadius: "20px",
          }}
        >
          <div
            className="card-body"
            style={{ height: "80vh", padding: "80px", marginTop: "50px" }} // Adicionado marginTop
          >
            <h5
              className="card-title text-center text-dark"
              style={{ margin: "25px" }}
            >
              Bem-Vindo ao VetSys!
            </h5>
            <form onSubmit={handleCadastro}>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">
                  Nome
                </label>
                <input
                  style={{ borderColor: "black" }}
                  type="text"
                  className="form-control"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
                <div className="mb-3">
                  <label htmlFor="sobrenome" className="form-label">
                    Sobrenome
                  </label>
                  <input
                    style={{ borderColor: "black" }}
                    type="text"
                    className="form-control"
                    id="sobrenome"
                    value={sobrenome}
                    onChange={(e) => setSobrenome(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  style={{ borderColor: "black" }}
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="senha" className="form-label">
                  Senha
                </label>
                <input
                  style={{ borderColor: "black" }}
                  type="password"
                  className="form-control"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmar senha" className="form-label">
                  Confirmar Senha
                </label>
                <input
                  style={{ borderColor: "black" }}
                  type="password"
                  className="form-control"
                  id="Confirmar senha"
                  value={confirmarsenha}
                  onChange={(e) => setConfirmarsenha(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn border-2"
                style={{
                  borderColor: "black",
                  marginLeft: "43%",
                  borderRadius: "15px",
                  width: "15%",
                }}
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
