import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery)); //Through middleware
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
