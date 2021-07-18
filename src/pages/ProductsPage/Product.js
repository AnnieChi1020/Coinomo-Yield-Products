import styled from "styled-components";
import React, { useState } from "react";
import arrow from "../../images/arrow.svg";

const Container = styled.div`
  width: 100%;
  & + & {
    border-top: 1px solid #e6e6e6;
  }
`;

const InfoDiv = styled.div`
  width: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 760px) {
    font-size: 12px;
  }
`;

const Info = styled.div`
  width: 100px;
  flex-grow: 1;
`;

const Button = styled.div`
  width: 30px;
  flex-grow: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonImg = styled.img`
  width: 15px;
  height: auto;
  transform: ${(props) => (props.rotate ? "rotate(0deg)" : "rotate(-90deg)")};
  transition: all 300ms ease-in;
  @media (max-width: 760px) {
    width: 10px;
  }
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-height: ${(props) => (props.open ? "100%" : "0")};
  overflow: hidden;
  opacity: ${(props) => (props.open ? "1" : "0")};
  padding: ${(props) => (props.open ? "0px 40px 30px 40px" : "0px 40px")};
  transition: all 300ms ease-in;
  @media (max-width: 760px) {
    font-size: 12px;
    padding: ${(props) => (props.open ? "0px 20px 30px 20px" : "0px 20px")};
  }
`;

const IntroRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 25px 0 15px 0;
  border-top: 1px solid #e6e6e6;
  @media (max-width: 760px) {
    padding: 15px 0 10px 0;
  }
`;

const IssuerRow = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 3.1fr;
  @media (max-width: 760px) {
    grid-template-columns: 0.8fr 3.2fr;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const AdditionalDetailRow = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr 1.2fr 0.8fr;
  @media (max-width: 760px) {
    grid-template-columns: 0.8fr 1.2fr 1.4fr 0.6fr;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const Detail = styled.div`
  width: 100%;
  text-align: left;
  padding: 15px 0;
  @media (max-width: 760px) {
    padding: 10px 0;
  }
  @media (max-width: 540px) {
    display: flex;
    flex-direction: row;
    padding: 5px 0;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  padding: 10px 0;
  margin: 0;
  @media (max-width: 760px) {
    font-size: 12px;
    padding: 5px 0;
  }
  @media (max-width: 540px) {
    padding: 0;
    line-height: 16px;
    width: 130px;
    flex-grow: 0;
  }
`;

const IntroTitle = styled(Title)`
  @media (max-width: 540px) {
    width: 100%;
    padding: 10px 0;
  }
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 760px) {
    font-size: 12px;
  }
  @media (max-width: 540px) {
    line-height: 16px;
    width: 100px;
    flex-grow: 1;
  }
`;

const IntroText = styled(Text)`
  @media (max-width: 540px) {
    width: 100%;
  }
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

  const handleToggle = () => {
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
        <Button onClick={handleToggle}>
          <ButtonImg rotate={showDetail} src={arrow} />
        </Button>
      </InfoDiv>
      <DetailDiv open={showDetail}>
        <IntroRow>
          <IntroTitle>Introduction</IntroTitle>
          <IntroText>{product.introduction}</IntroText>
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
    </Container>
  );
};

export default Product;
