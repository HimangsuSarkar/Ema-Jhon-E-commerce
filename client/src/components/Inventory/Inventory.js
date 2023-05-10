import React from "react";
// import fakeData from '../../fakeData';

const Inventory = () => {
  const handleAddProduct = () => {
    const product = {};
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
  };
  return (
    <div>
      <form action="">
        <p>
          <span>Product Name: </span>
          <input type="text" />
        </p>
        <p>
          <span>Product price: </span>
          <input type="text" />
        </p>
        <p>
          <span>Quantity: </span>
          <input type="text" />
        </p>
        <p>
          <span>Product Image: </span>
          <input type="file" />
        </p>
        <button onClick={handleAddProduct}>Add Products</button>
      </form>
    </div>
  );
};

export default Inventory;
