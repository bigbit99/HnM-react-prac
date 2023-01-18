import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  let [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async() => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/bigbit99/HnM-react-prac/products?q=${searchQuery}`;
    let response = await fetch(url)
    let data = await response.json();
    setProductList(data);
  }


  useEffect(()=>{
    getProducts();
    //query값이 바뀔때마다 useEffect로 getProducts함수를 호출해야하니까 
    //[]배열에 query를 봐달라고 써줌
  }, [query])

  return (
    <div>
      <Container>
        
        <Row>
          {productList.map((item)=>(
            <Col lg={3} key={item.id}><ProductCard item={item}/></Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
