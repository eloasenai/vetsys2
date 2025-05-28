import React from "react";
import { useLocation } from "react-router";

const ProdutoDetalhe = () => {
  const { state } = useLocation();

  if (!state) return <p>Produto não encontrado</p>;

  const { nome, preco, ingredientes, tamanho, idade, src } = state;

  return (
    <div style={{ padding: "40px" }}>
      <img src={`src/assets/img/gato.img/${src}`} alt={nome} style={{ width: "300px" }} />
      <h1>{nome}</h1>
      {ingredientes && <p><strong>Ingredientes:</strong> {ingredientes}</p>}
      {tamanho && <p><strong>Tamanho:</strong> {tamanho}</p>}
      {idade && <p><strong>Idade:</strong> {idade}</p>}
      <p style={{ color: "red" }}><strong>Preço:</strong> {preco}</p>
      <button style={{ padding: "10px 20px" }}>Comprar</button>
    </div>
  );
};

export default ProdutoDetalhe;
