import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Header = styled.header`
  display: ${(props) => props.theme.flex.display};
  justify-content: ${(props) => props.theme.flex.justifyContent[1]};
  padding-top: ${(props) => props.theme.spacing[7] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[7] + "px"};
  padding-left: ${(props) => props.theme.spacing[9] + "px"};
  padding-right: ${(props) => props.theme.spacing[11] + "px"};
`;

export const AuthNav = styled.nav`
  display: ${(props) => props.theme.flex.display};
  padding-top: ${(props) => props.theme.spacing[2] + "px"};

  list-style: ${(props) => props.theme.listText.listStyle};

  > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[11] + "px"};
  }
`;

export const Link = styled(NavLink)`
  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-size: ${(props) => props.theme.listText.fontSizeM};

  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};

    transition: ${(props) => props.theme.transition.color};
  }
`;

export const Logo = styled.svg`
  width: ${(props) => props.theme.spacing[10] + "px"};
  height: ${(props) => props.theme.spacing[10] + "px"};
  fill: ${(props) => props.theme.color.logo};
`;