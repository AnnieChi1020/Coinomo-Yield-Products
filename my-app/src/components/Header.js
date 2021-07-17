import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #46d09d;
  position: fixed;
  top: 0;
`;

const MainContent = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
  width: auto;
`;

const Header = () => {
  return (
    <Container>
      <MainContent>
        <Logo src="https://static.wixstatic.com/media/130f92_aa5a3fb7d9954b3bad5c1c9e815d0435~mv2.png/v1/fill/w_488,h_162,al_c,q_85,usm_0.66_1.00_0.01/coinomo_logo_trans_white.webp" />
      </MainContent>
    </Container>
  );
};

export default Header;
