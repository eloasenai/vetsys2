import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <img src={product.image} alt={product.name} className={styles.modalImage} />
        <h2>{product.name}</h2>
        <p>Categoria: {product.category}</p>
        <p>Preço: R$ {product.price}</p>
        <div className={styles.buttons}>
          <button>Adicionar à Bolsa</button>
          <button>Comprar</button>
        </div>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.productCard} onClick={toggleModal}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.category}</p>
      </div>
      {isModalOpen && <ProductModal product={product} onClose={toggleModal} />}
    </>
  );
};

export default ProductCard;
