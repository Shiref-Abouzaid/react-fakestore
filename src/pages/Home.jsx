import React, { useState, useEffect } from "react";
import Product from "../components/Product";
import Categories from "../components/Categories";
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
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
      }, []); 
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
  return (
    <>
      <Categories />
      <Container fluid className="products-container">
      <Row className="g-4"> 
        {products.length &&
          products.map((p) => (
            <Col xs={6} md={6} lg={3} key={p.id}>
              <Product product={p} />
            </Col>
          ))}
      </Row>
    </Container>
    </>
 
  )
}

export default Home
