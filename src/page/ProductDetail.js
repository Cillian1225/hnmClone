import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Dropdown, Button } from "react-bootstrap";
const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Cillian1225/hnmClone/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container className="product-detail-card">
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.id}</div>
          <div>{product?.title}</div>
          <div>₩{product?.price}</div>
          <div>{product?.choice == true ? "Conscious Choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Size
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
