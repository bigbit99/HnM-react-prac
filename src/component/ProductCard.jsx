import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {  
    navigate(`/product/${item.id}`);
  }

  return (
    <div className="card" onClick={showDetail}>
      <img className="item-img" src={ item?.img } alt=""/>
      <p>{item?.choice === true ? "Concious choice" : ""}</p>
      <p>{item?.title}</p>
      <p>{item?.price}</p>
      <p>{item?.new === true ? "신제품" : ""}</p>
    </div>
  );
};

export default ProductCard;
