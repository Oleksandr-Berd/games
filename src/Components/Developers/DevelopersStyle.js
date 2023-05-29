import styled from "styled-components";

export const DevelopersTitle = styled.h3`
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const TeamList = styled.ul`
  display: ${(props) => props.theme.grid.display};
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing[9] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
`;

export const TeamItem = styled.li`
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};

  background: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
`;

export const ItemName = styled.h3`
  margin-top: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;
