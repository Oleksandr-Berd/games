import styled from "styled-components";

export const AllGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  padding-right: ${(props) => props.theme.spacing[7] + "px"};
`;

export const AllGamesList = styled.ul`
  display: ${(props) => props.theme.grid.display};
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing[10] + "px"};
`;

export const AllGamesItem = styled.li`
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  border-radius: ${(props) => props.theme.radius[1] + "px"};
  box-shadow: 0 2px 6px rgba(255, 0, 0, 0.8);
`;

export const AllGameItemImage = styled.img`
  width: ${(props) => props.theme.percentage[10]};
  height: 224px;
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};

  border-radius: ${(props) => props.theme.radius[1] + "px"};
`;

export const PlatformContainer = styled.div`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[0]};
  justify-content: ${(props) => props.theme.flex.justifyContent[1]};
  align-items: ${props => props.theme.flex.alignItems[2]};
`;

export const PlatformsList = styled.ul`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[0]};
`;

export const PlatformItem = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[2] + "px"};
  }
`;

export const Rating = styled.p`
  padding-top: ${(props) => props.theme.spacing[1] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[1] + "px"};
  padding-right: ${(props) => props.theme.spacing[2] + "px"};
  padding-left: ${(props) => props.theme.spacing[2] + "px"};

  color: ${(props) =>
    props.calculatedRating > 80
      ? props.theme.color.high
      : props.calculatedRating < 60
      ? props.theme.color.poor
      : props.theme.color.average};

  border: 1px solid
    ${(props) =>
      props.calculatedRating > 80
        ? props.theme.color.high
        : props.calculatedRating < 60
        ? props.theme.color.poor
        : props.theme.color.average};

  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeXS};
  box-shadow: 0 0 5px
    ${(props) =>
      props.calculatedRating > 80
        ? props.theme.color.high
        : props.calculatedRating < 60
        ? props.theme.color.poor
        : props.theme.color.average};
`;

export const AllGamesItemTopContainer = styled.div`
  margin-left: ${(props) => props.theme.spacing[4] + "px"};
  margin-right: ${(props) => props.theme.spacing[4] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[2] + "px"};
`;

export const AllGameItemTitle = styled.h4`
  margin-left: ${(props) => props.theme.spacing[4] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[4] + "px"};

  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeS};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;
