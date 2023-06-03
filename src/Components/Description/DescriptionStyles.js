import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
} from "react-accessible-accordion";
import styled from "styled-components";

export const Container = styled(Accordion)`
margin-bottom:${props => props.theme.space[5]}
`

export const DescriptionText = styled.p`
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.fontFamily.text};
  font-size: ${(props) => props.theme.size.S};
  line-height: 1.4;
`;

export const Heading = styled(AccordionItemHeading)`

`;

export const Item = styled(AccordionItem)`
 
`;

export const Button = styled(AccordionItemButton)`
padding-left: ${props=> props.theme.space[5]};

  text-align: left;
  background-color: transparent;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.size.M};
  font-family: ${(props) => props.theme.fontFamily.title};
  font-weight: ${props => props.theme.weight.bold};
`;
