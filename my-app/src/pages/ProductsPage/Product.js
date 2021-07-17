import styled from "styled-components";
import React, { useState, useEffect } from "react";
import arrow from "../../images/arrow.svg";

const Container = styled.div`
  width: 100%;
  & + & {
    border-top: 1px solid #e6e6e6;
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  padding: 30px 0;
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

const RotatedButton = styled(ButtonImg)`
  transform: rotate(-90deg);
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  opacity: ${(props) => (props.open ? "1" : "0")};
  padding: ${(props) => (props.open ? "0px 50px 30px 50px" : "0px 50px")};
  transition: all 300ms ease-in-out;
`;

const IntroRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 25px 0 15px 0;
  border-top: 1px solid #e6e6e6;
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
  font-size: 14px;
  line-height: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  & :hover {
    color: #2e8b68;
    text-decoration: underline;
  }
`;

const Product = (props) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    setShowDetail(showDetail ? false : true);
  };

  const product = props.product;

  const infoArray = [
    product.name,
    product.type,
    product.flexible,
    product.minimun,
    `${product.apr}%`,
  ];

  return (
    <Container>
      <InfoDiv>
        {infoArray.map((info, index) => (
          <Info key={index}>{info}</Info>
        ))}
        <Button onClick={handleClick}>
          {showDetail ? (
            <RotatedButton src={arrow} />
          ) : (
            <ButtonImg src={arrow} />
          )}
        </Button>
      </InfoDiv>
      {/* {showDetail && ( */}
      <DetailDiv open={showDetail}>
        <IntroRow>
          <Title>Introduction</Title>
          <Text>{product.introduction}</Text>
        </IntroRow>
        <IssuerRow>
          <Detail>
            <Title>Issuer</Title>
            <Text>{product.issuer}</Text>
          </Detail>
          <Detail>
            <Title>Issuer Website</Title>
            <Link href={product.websiteUrl}>
              <Text>{product.websiteUrl}</Text>
            </Link>
          </Detail>
        </IssuerRow>
        <AdditionalDetailRow>
          <Detail>
            <Title>Start Date</Title>
            <Text>{product.startDate}</Text>
          </Detail>
          <Detail>
            <Title>Total Value Locked</Title>
            <Text>{product.volumn}</Text>
          </Detail>
          <Detail>
            <Title>Contract Address</Title>
            {product.contractAddress ? (
              <Link href={product.contractAddress}>
                <Text>{product.slicedContractAddress}</Text>
              </Link>
            ) : (
              <Text>{product.slicedContractAddress}</Text>
            )}
          </Detail>
          <Detail>
            <Title>Risk Level</Title>
            <Text>{product.riskLevel}</Text>
          </Detail>
        </AdditionalDetailRow>
      </DetailDiv>
      {/* )} */}
    </Container>
  );
};

export default Product;
