import styled from "styled-components"

export const DLCTitle = styled.h3`
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const DLCList = styled.ul`

`