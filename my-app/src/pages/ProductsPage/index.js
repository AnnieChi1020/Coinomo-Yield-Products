import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Product from "./Product";
import { getProductsData } from "../../utils/api";
import ReactLoading from "react-loading";

const Container = styled.div`
  width: 95%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding: 50px 20px;
  background-color: white;
  box-sizing: border-box;
  @media (max-width: 540px) {
    padding: 50px 0px;
  }
`;

const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 32px;
  line-height: 36px;
  font-weight: 800;
  text-align: left;
  color: #45d09e;
  @media (max-width: 760px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const Subtitle = styled.h2`
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  margin: 30px 0 0 0;
  font-weight: normal;
  color: #3b3b3b;
  @media (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 15px;
  }
`;

const ProductsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: white;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 6%);
  border-radius: 5px;
  @media (max-width: 760px) {
    margin-top: 30px;
  }
`;

const ProductsTitles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  font-size: 16px;
  padding: 20px 10px;
  border-bottom: 1px solid #d2d2d2;
  background-color: #f3f3f3;
  border-radius: 5px 5px 0 0;
  @media (max-width: 760px) {
    font-size: 14px;
    padding: 10px 10px;
  }
`;

const ProductsTitle = styled.div`
  width: 100px;
  flex-grow: 1;
`;

const ProductsButton = styled.div`
  width: 30px;
  flex-grow: 0;
  display: flex;
  align-items: center;
`;

const Loading = styled(ReactLoading)`
  padding: 60px 0;
  margin: 0 auto;
`;

const productTitles = ["Name", "Type", "Flexible", "Minimum", "APY"];
const URL_LENGTH = 25;

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const constructProductData = (products) => {
    products.forEach((product) => {
      product.slicedContractAddress = product.contractAddress
        ? product.contractAddress.slice(0, URL_LENGTH) + "..."
        : "-";
      product.minimun = "100 USDC";
      product.flexible = product.period ? product.period : "Flexible";
      product.volumn = product.volumn.replace("ⓢ", "");
      product.startDate = product.startDate
        ? product.startDate.replaceAll("-", "/")
        : "-";
    });
    return products;
  };

  const setProductsData = async () => {
    const data = await getProductsData();
    const products = constructProductData(data.data.en);
    setProducts([...products]);
    setLoaded(true);
  };

  useEffect(() => {
    setProductsData();
    // eslint-disable-next-line
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
        {loaded ? (
          products.map((product) => (
            <Product key={product.vault.Production.id} product={product} />
          ))
        ) : (
          <Loading
            type={"spokes"}
            color={"#4f4f4f"}
            height={"80px"}
            width={"80px"}
          />
        )}
      </ProductsContainer>
    </Container>
  );
};

export default ProductsPage;
