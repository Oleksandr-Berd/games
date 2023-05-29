import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
  min-width: ${(props) => props.theme.spacing[12] + "px"};
  padding-left: ${(props) => props.theme.spacing[8] + "px"};

  background-color: ${(props) => props.theme.color.main};
`;

export const SideBarItem = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[9] + "px"};
  }
`;

export const SideBarTitleLink = styled(NavLink)`
  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  line-height: ${(props) => props.theme.listText.lineHeightM};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};

  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};

    transition: ${(props) => props.theme.transition.color};
  }

 
`;

export const SubListSideBar = styled.ul`
  margin-top: ${(props) => props.theme.spacing[8] + "px"};
`;

export const SubItemSideBar = styled.li`
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing[8] + "px"};
  }
`;

export const SubLinkSideBar = styled(NavLink)`
  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeS};
  font-family: ${(props) => props.theme.listText.fontFamilyText};
  font-weight: ${(props) => props.theme.listText.fontWeightNormal};

  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};

    transition: ${(props) => props.theme.transition.color};
  }
`;
