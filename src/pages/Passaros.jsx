import React, { useState } from "react";

const Passaros= () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando por:", searchTerm);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Página de Pássaros</h1>
      <p>Informações sobre pássaros.</p>
    </div>
  );
};

export default Passaros;