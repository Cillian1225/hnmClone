import React from "react";

const ProductDetailCard = ({ item }) => {
  return (
    <div>
      <div className="card">
        <img className="img" src={item?.img} />
        <div>{item?.choice == true ? "Conscious choice" : ""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new == true ? "New" : ""}</div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
