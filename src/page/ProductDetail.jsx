import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Dropdown, Button } from "react-bootstrap";

const ProductDetail = () => {
  let{id} = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail= async () => {
    let url = `https://my-json-server.typicode.com/bigbit99/HnM-react-prac/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setProduct(data);
  }

  useEffect(()=>{
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>
          
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
