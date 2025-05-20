import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (nome && email) {
      localStorage.setItem("devlogin", JSON.stringify({ nome, email }));
      navigate("/"); // redireciona para a tela inicial
    }
  };
  return (
    <div>
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100" style={{marginLeft: "700px",width: "70%"}} >
            <div className="card w-50">
            <div className="card-body">
                <h5 className="card-title">BEM-Vindo ao VetSys!</h5>
                <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Login;