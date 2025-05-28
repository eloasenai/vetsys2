import React from "react";
import { useParams } from "react-router-dom";

const ProdutoDetalhes = () => {
  const { id } = useParams(); // Obtém o ID do produto da URL

  return (
    <div style={{ padding: "20px" }}>
      <h1>Detalhes do Produto</h1>
      <p>Este é o produto com ID: {id}</p>
      {/* Adicione aqui as informações detalhadas do produto */}
    </div>
  );
};

export default ProdutoDetalhes;