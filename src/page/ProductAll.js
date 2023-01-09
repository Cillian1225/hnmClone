import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
const ProductAll = () => {
  const [query, setQuery] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = ` https://my-json-server.typicode.com/Cillian1225/hnmClone/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="ProductAll-continer">
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
