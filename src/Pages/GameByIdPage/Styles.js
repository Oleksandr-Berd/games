import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
padding-bottom: ${props => props.theme.spacing[4] + "px"};

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
display: ${props => props.theme.flex.display};
align-items: ${props => props.theme.flex.alignItems[2]};

& > *:not(:last-child){
    margin-right:${props => props.theme.spacing[4]+"px"}
}
`

export const MetacriticLink = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;

export const Description = styled.article`
  max-width: ${(props) => props.theme.percentage[8]};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing[5]+"px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  line-height: ${props => props.theme.listText.lineHeightM};
`;

export const DevelopersTitle = styled.h3`
margin-bottom:${props => props.theme.spacing[4]+"px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${props => props.theme.listText.fontStyleItalic};
`;

export const Released = styled.p`
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const DevelopersList = styled.ul`
  display: ${(props) => props.theme.flex.display};
  justify-content: ${props => props.theme.flex.justifyContent[0]};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;

export const DevelopersItem = styled.li`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${props => props.theme.flex.flexDirection[0]};
  align-items: ${props => props.theme.flex.alignItems[2]};
`;

export const DevelopersImg = styled.img`
margin-right: ${props => props.theme.spacing[5]+"px"};

border-radius: ${props => props.theme.radius[5]+"%"}
`