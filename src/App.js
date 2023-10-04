import "./App.css";
import React, { useState, useEffect } from "react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // The empty dependency array means this useEffect will run once when the component mounts.
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Navbar />
      <Categories />
      <div className="products-container">
        {products.length &&
          products.map((p) => <Product key={p.id} product={p} />)}
      </div>
    </>
  );
}

export default App;
