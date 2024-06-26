import "./App.css";
import Header from "./MyComponent/Header";
import ProductList from "./MyComponent/ProductList";
import React, { useState } from "react";
function App() {
  const productList =( [
    {
      price: 56522,
      name: "Iphone 11",
      quantity: 0,
    },
    {
      price: 50522,
      name: "Redmi not 20",
      quantity: 0,
    },
  ]);
  let [productlist, setProductList] = useState(productList);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity > 0
      ? (newProductList[index].quantity = 0)
      : setProductList(newProductList);
  };

  return (
    <>
      <Header />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      {/* <Footer/> */}
    </>
  );
}

export default App;
