import styled from "styled-components"

export const Title = styled.h3`
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
`;

export const NoAchieves = styled.h1`
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeL};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
`;