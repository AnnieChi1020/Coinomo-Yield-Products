import styled from "styled-components";
import React, { useState, useEffect } from "react";
import arrow from "../../images/arrow.svg";

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  border: 1px solid #3d3d3d;
`;

const InfoDiv = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 100px;
  flex-grow: 1;
`;

const Button = styled.div`
  width: 80px;
  flex-grow: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 15px;
  height: auto;
`;

const DetailDiv = styled.div`
  width: 100%;
  padding: 20px 50px;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const IntroRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 15px 0;
`;

const IssuerRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const AdditionalDetailRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Detail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 15px 0;
`;

const Title = styled.div`
  font-size: 18px;
  line-height: 24px;
  font-weight: bold;
  padding: 10px 0;
`;

const Text = styled.div`
  font-size: 12px;
  line-height: 18px;
`;

const Product = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(showDetail ? false : true);
  };

  return (
    <Container>
      <InfoDiv>
        <Info>{props.product.name}</Info>
        <Info>{props.product.type}</Info>
        <Info>12345</Info>
        <Info>12345</Info>
        <Info>{`${props.product.apr}%`}</Info>
        <Button onClick={handleClick}>
          <ButtonImg src={arrow} />
        </Button>
      </InfoDiv>
      {showDetail && (
        <DetailDiv>
          <IntroRow>
            <Title>Introduction</Title>
            <Text>Hello World</Text>
          </IntroRow>
          <IssuerRow>
            <Detail>
              <Title>Issuer</Title>
              <Text>{props.product.issuer}</Text>
            </Detail>
            <Detail>
              <Title>Issuer Website</Title>
              <Text>{props.product.websiteUrl}</Text>
            </Detail>
          </IssuerRow>
          <AdditionalDetailRow>
            <Detail>
              <Title>Start Date</Title>
              <Text>2021/4/21</Text>
            </Detail>
            <Detail>
              <Title>Total Value Locked</Title>
              <Text>https://google.com</Text>
            </Detail>
            <Detail>
              <Title>Contract Address</Title>
              <Text>{props.product.contractAddress}</Text>
            </Detail>
            <Detail>
              <Title>Risk Level</Title>
              <Text>{props.product.riskLevel}</Text>
            </Detail>
          </AdditionalDetailRow>
        </DetailDiv>
      )}
    </Container>
  );
};

export default Product;
