import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../../utils/api";

const Container = styled.div`
  width: 95%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 50px 20px;
  background-color: white;
  box-sizing: border-box;
`;

const Title = styled.div`
  width: 100%;
  font-size: 32px;
  line-height: 36px;
  font-weight: 800;
  text-align: left;
  color: #45d09e;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  margin-top: 30px;
  color: #3b3b3b;
`;

const ProductsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 6%);
  border-radius: 5px;
`;

const ProductsTitles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #d2d2d2;
  background-color: #f3f3f3;
  border-radius: 5px 5px 0 0;
`;

const ProductsTitle = styled.div`
  width: 100px;
  flex-grow: 1;
`;

const ProductsButton = styled.div`
  width: 80px;
  flex-grow: 0;
  display: flex;
  align-items: center;
`;

const productTitles = ["Name", "Type", "Flexible", "Minimum", "APY"];

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  const getProductsData = async () => {
    const data = await getProducts();
    console.log(data);
    const products = data.data.en;
    for (let i = 0; i < products.length; i++) {
      products[i].id = i + 1;
    }
    products.forEach((product) => {
      product.slicedContractAddress = product.contractAddress
        ? product.contractAddress.slice(0, 25) + "..."
        : "-";
      product.minimun = "100 USDC";
      product.flexible = product.period ? product.period : "Flexible";
      product.volumn = product.volumn.replace("ⓢ", "");
      product.startDate = product.startDate
        ? product.startDate.replaceAll("-", "/")
        : "-";
    });

    setProducts([...data.data.en]);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <Container>
      <Title>Coinomo Yield Products</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </Subtitle>
      <ProductsContainer>
        <ProductsTitles>
          {productTitles.map((title) => (
            <ProductsTitle>{title}</ProductsTitle>
          ))}
          <ProductsButton />
        </ProductsTitles>
        {products.map((product) => (
          <Product key={product.vault.Production.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsPage;
