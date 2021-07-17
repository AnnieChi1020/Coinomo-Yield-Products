import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 95%;
  height: 500px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  border: 1px solid red;
  padding: 50px 20px;
`;

function Container() {
  return <ContainerDiv />;
}

export default Container;
