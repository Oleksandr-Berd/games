import styled from "styled-components";

export const DescriptionText = styled.p`
color: ${props => props.theme.color.text};
font-family: ${props => props.theme.fontFamily.text};
font-size: ${props => props.theme.size.S};
line-height: 1.4;
`