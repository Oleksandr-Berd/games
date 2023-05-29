import styled from "styled-components";
import Accordion from "react-bootstrap/Accordion";

export const AccordionDescription = styled(Accordion.Item)`
  background: ${(props) => props.theme.background.bloody};
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  line-height: ${(props) => props.theme.listText.lineHeightM};
  font-size: ${(props) => props.theme.listText.fontSizeM};
`;

export const AccordionDescriptionTitle = styled(Accordion)`
  margin-bottom: ${(props) => props.theme.spacing[7] + "px"};
  margin-left: ${(props) => props.theme.spacing[3] + "px"};
  margin-right: ${(props) => props.theme.spacing[3] + "px"};

  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
`;