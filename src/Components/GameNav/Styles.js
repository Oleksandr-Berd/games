import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.ul`
  display: ${(props) => props.theme.flex.display};
  justify-content: ${(props) => props.theme.flex.justifyContent[0]};
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[5] + "px"};
  }
`;

export const Link = styled(NavLink)`
  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};

  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};
    transition: ${(props) => props.theme.transition.color};
  }
`;
