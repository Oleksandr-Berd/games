import styled from "styled-components"

export const Container = styled.div`
  text-align: ${(props) => props.theme.listText.textAlignCenter};
  background: ${(props) => props.theme.background.bloody};
`;

export const Image = styled.img`
max-width: ${props => props.theme.percentage[9]};
margin-bottom: ${props => props.theme.spacing[9] + "px"};

border-radius: ${props => props.theme.radius[2]+"px"};
`

export const TitleContainer = styled.div`
  display: ${(props) => props.theme.flex.display};
  flex-direction: ${(props) => props.theme.flex.flexDirection[0]};
  justify-content: ${(props) => props.theme.flex.justifyContent[1]};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  margin-bottom: ${(props) => props.theme.spacing[6] + "px"};
`;

export const LeftSideContainer = styled.div`
text-align: ${props => props.theme.listText.textAlignLeft};
`

export const ImageAdd = styled.img`
  max-width: ${(props) => props.theme.percentage[6]};

  border-radius: ${(props) => props.theme.radius[4] + "px"};
`;

export const Title = styled.h2`
color: ${props => props.theme.color.text};
font-family: ${props => props.theme.listText.fontFamilyTitle};
font-size: ${props => props.theme.listText.fontSizeXM};
font-style: ${props => props.theme.listText.fontStyleItalic};
`

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
display: ${props => props.theme.flex.display};
`

export const GenresImage = styled.img`
margin-right: ${props => props.theme.spacing[4]+"px"};
`

export const Description = styled.article`
max-width: ${props => props.theme.percentage[8]};
margin-left: auto;
margin-right: auto;

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
`;