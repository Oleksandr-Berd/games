import styled from "styled-components";

export const DLCTitle = styled.h3`
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const DLCList = styled.ul`
  display: ${(props) => props.theme.grid.display};
  grid-template-columns: repeat(3, 1fr);
  gap: auto;
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
`;

export const DLCItem = styled.li`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[1]};
  justify-content: ${(props) => props.theme.flex.justifyContent[1]};
  align-items: ${(props) => props.theme.flex.alignItems[2]};
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};

  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius: ${(props) => props.theme.radius[3] + "px"};
`;

export const DLCItemName = styled.h3`
  margin-top: ${(props) => props.theme.spacing[5] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const DLCRealized = styled.p`
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const DLCRating = styled.p`
  padding-top: ${(props) => props.theme.spacing[1] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[1] + "px"};
  padding-right: ${(props) => props.theme.spacing[2] + "px"};
  padding-left: ${(props) => props.theme.spacing[2] + "px"};
  margin-left: ${(props) => props.theme.spacing[2] + "px"};
  align-self: flex-start;

  color: ${(props) =>
    props.calculatedRating > 80
      ? props.theme.color.high
      : props.calculatedRating < 60 && props.calculatedRating > 1
      ? props.theme.color.poor
      : props.calculatedRating > 1
      ? props.theme.color.average
      : props.theme.color.rate};

  border: 1px solid
    ${(props) =>
      props.calculatedRating > 80
        ? props.theme.color.high
        : props.calculatedRating < 60 && props.calculatedRating > 1
        ? props.theme.color.poor
        : props.calculatedRating > 1
        ? props.theme.color.average
        : props.theme.color.rate};

  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeXS};
  box-shadow: 0 0 5px;
  ${(props) =>
    props.calculatedRating > 80
      ? props.theme.color.high
      : props.calculatedRating < 60
      ? props.theme.color.poor
      : props.theme.color.average};
`;
