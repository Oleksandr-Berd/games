import styled from "styled-components"

export const Layout = styled.div`
  background-color: ${(props) => props.theme.color.main};
`;

export const SharedCon = styled.div`
  display: ${(props) => props.theme.flex.display};
`;
