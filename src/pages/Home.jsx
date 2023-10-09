import React, { useState, useEffect } from "react";
import Product from "~/components/Product";
import Categories from "~/components/Categories";
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useCart } from '~/contexts/CartContext';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { cart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);

  }

  const getProdcutsCategory = () => {
    if (!selectedCategory) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      })
  }

  useEffect(() => {
    getProdcutsCategory();
  }, [selectedCategory])

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
  }, []);



  return (
    <>

      <Categories setSelectedCategory={setSelectedCategory} />

      {error ? <Alert variant="danger">
        Error: {error}
      </Alert> : null}

      {loading ? <div className="spinner-container mt-5">
        <Spinner animation="grow" variant="primary"></Spinner >
      </div> : <Container fluid className="products-container">
        <Row className="g-4">
          {products.length &&
            products.map((p) => (
              <Col xs={6} md={6} lg={3} key={p.id}>
                <Product product={p} isInCart={isInCart} />
              </Col>
            ))}
        </Row>
      </Container>}
      

    </>

  )
}

export default Home
