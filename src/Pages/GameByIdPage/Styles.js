import Carousel from "react-bootstrap/Carousel";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: ${(props) => props.theme.spacing[7] + "px"};

  text-align: ${(props) => props.theme.listText.textAlignCenter};
  background: ${(props) => props.theme.background.bloody};
`;

export const Image = styled.img`
  max-width: ${(props) => props.theme.percentage[9]};
  margin-bottom: ${(props) => props.theme.spacing[9] + "px"};

  border-radius: ${(props) => props.theme.radius[2] + "px"};
`;

export const TitleContainer = styled.div`
  position: relative;

  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[0]};
  justify-content: ${(props) => props.theme.flex.justifyContent[1]};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[6] + "px"};
`;

export const LeftSideContainer = styled.div`
  text-align: ${(props) => props.theme.listText.textAlignLeft};
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};

  & > * {
    margin-bottom: ${(props) => props.theme.spacing[4] + "px"};
  }
`;

export const ImageAdd = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-50%) translateX(-5%);

  max-width: ${(props) => props.theme.percentage[6]};

  border-radius: ${(props) => props.theme.radius[4] + "px"};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const WebLink = styled(NavLink)`
  display: inline-block;
  margin-bottom: ${(props) => props.theme.spacing[4] + "px"};

  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const GenresList = styled.ul`
  display: ${(props) => props.theme.grid.display};
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing[4] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const GenresTitle = styled.h3`
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
`;

export const GenresItem = styled.li`
  display: ${(props) => props.theme.flex.display};
`;

export const GenresImage = styled.img`
  margin-right: ${(props) => props.theme.spacing[4] + "px"};
`;

export const MetacriticCon = styled.div`
  display: ${(props) => props.theme.flex.display};
  align-items: ${(props) => props.theme.flex.alignItems[2]};

  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[4] + "px"};
  }
`;

export const MetacriticTitle = styled.h3`
  font-size: ${(props) => props.theme.listText.fontSizeXS};
`;

export const MetacriticLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-size: ${(props) => props.theme.listText.fontSizeXS};
`;

export const Description = styled.article`
  max-width: ${(props) => props.theme.percentage[8]};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  line-height: ${(props) => props.theme.listText.lineHeightM};
`;

export const DevelopersCon = styled.div`
display: ${props => props.theme.flex.display};
align-items: center;

& > *{
  margin-right: ${props => props.theme.spacing[5]+"px"};
}
`

export const DevelopersTitle = styled.h3`
  margin-bottom: ${(props) => props.theme.spacing[3] + "px"};

  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeXS};
`;

export const Released = styled.p`
margin-bottom:${props => props.theme.spacing[3]+"px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const DevelopersList = styled.ul`
  display: ${(props) => props.theme.flex.display};
  justify-content: ${(props) => props.theme.flex.justifyContent[0]};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const DevelopersItem = styled.li`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[0]};
  align-items: ${(props) => props.theme.flex.alignItems[2]};

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[5] + "px"};
  }
`;

export const DevelopersImg = styled.img`
  margin-right: ${(props) => props.theme.spacing[5] + "px"};

  border-radius: ${(props) => props.theme.radius[5] + "%"};
`;

export const BackButton = styled(NavLink)`
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};

  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  background: ${(props) => props.theme.color.main};
  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};
    transition: ${(props) => props.theme.transition.color};
  }
`;

export const ScreenShotsTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.spacing[4] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const CustomCarousel = styled(Carousel)`
  width: ${props => props.theme.percentage[7]};
  margin-bottom: ${props=>props.theme.spacing[6]+"px"};
  margin-right: auto;
  margin-left: auto;

`;


