import React from "react";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);     
    
  };

  return (
    <div className="card">
      <img
        src={product.image || "https://via.placeholder.com/300"}
        alt={product.name}
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
