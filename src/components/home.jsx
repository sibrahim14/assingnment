import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Menubar from "./menubar";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //  FILTER LOGIC
  let filteredProducts = products.filter((p) =>
    category === "all" ? true : p.category.toLowerCase() === category.toLowerCase()

  );

  // SORT LOGIC
  if (sortPrice === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortPrice === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Menubar
        setCategory={setCategory}
        setSortPrice={setSortPrice}
      />

      <div className="product-list">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
