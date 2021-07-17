import styled from "styled-components";

const TitleDiv = styled.div`
  width: 100%;
  height: 30px;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 800;
`;

function Title(props) {
  return <TitleDiv>{props.title}</TitleDiv>;
}

export default Title;
