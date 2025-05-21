import React, { useState } from "react";
import { useNavigate } from "react-router";

const Entrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

 const navigate = useNavigate();

  const handleEntrar = (e) => {
    e.preventDefault();
    if (email && senha) {
      localStorage.setItem("devEntrar", JSON.stringify({ email, senha }));
      navigate("/"); // redireciona para a tela inicial
    }
  };

  return (
<div className="entrar-container">
      {/* Imagem ao lado do formulário */}
      <div className="entrar-image">
        <img
          src="src/assets/img/cadastro.png" // Substitua pelo caminho da sua imagem
          alt="entrar"
        />
      </div>
      {/* Formulário de cadastro */}
      <div className="entrar-form">
        <div
          className="card"
          style={{ borderColor: "black", borderRadius: "20px" }}
        >
          <div
            className="card-body"
            style={{ height: "80vh", padding: "80px", marginTop: "50px" }} // Adicionado marginTop
          >
            <h5 className="card-title text-center text-dark" style={{margin:"80px"}} >
              Bem-Vindo ao VetSys!

              <p>Vamos lá!</p>
              
            </h5>
            <form onSubmit={handleEntrar}>
             
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
              <button type="submit" className="btn border-2" style={{borderColor:"black",marginLeft:"43%", borderRadius:"15px", width:"15%"}}>
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>  
    )
}
 
export default Entrar