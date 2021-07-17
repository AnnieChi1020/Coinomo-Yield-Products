import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProducts } from "../../utils/api";

const Container = styled.div`
  width: 95%;
  height: 500px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 50px 20px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 800;
  text-align: left;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  line-height: 1.2rem;
  text-align: left;
  margin-top: 40px;
`;

const ProductsContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  /* background-color: white; */
`;

const ProductsTitles = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
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
      console.log(product);
      product.slicedContractAddress = product.contractAddress
        ? product.contractAddress.slice(0, 25) + "..."
        : "";
    });
    setProducts([...data.data.en]);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

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
