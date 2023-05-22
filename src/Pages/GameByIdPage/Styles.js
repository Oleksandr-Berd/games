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

export const Title = styled.h2`
color: ${props => props.theme.color.text};
font-family: ${props => props.theme.listText.fontFamilyTitle};
font-size: ${props => props.theme.listText.fontSizeXM};
font-style: ${props => props.theme.listText.fontStyleItalic};
`
export const Description = styled.article`
  color: ${(props) => props.theme.color.text};
`;