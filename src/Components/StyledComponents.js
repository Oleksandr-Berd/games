import { Field, Form } from "formik";
import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(("../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf")) format("truetype");
}
@font-face {
  font-family: "Caveat";
  src: local("Caveat"),
    url(("../assets/fonts/Caveat_Brush/CaveatBrush-Regular.ttf"))
      format("truetype");
}

h1, h2, h3, h4 , h5 ,h6{
  margin: ${(props) => props.theme.spacing[0]};
}

span, p, a{
  margin: ${(props) => props.theme.spacing[0]};
}

ul{
  padding: ${props => props.theme.spacing[0]};
  list-style: ${props => props.theme.listText.listStyle}
}
`;

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

  &:hover, &:focus {
    color: ${(props) => props.theme.color.hover};

    transition: ${(props) => props.theme.transition.color};
  }
`;

export const Logo = styled.svg`
  width: ${(props) => props.theme.spacing[10] + "px"};
  height: ${(props) => props.theme.spacing[10] + "px"};
  fill: ${(props) => props.theme.color.logo};
`;

export const Layout = styled.div`
  background-color: ${(props) => props.theme.color.main};
`;

export const SharedCon = styled.div`
display: ${props => props.theme.flex.display}
`

export const HomePage = styled.div`
  display: ${(props) => props.theme.grid.display};
  grid-template-columns: repeat(2, 1fr);
  justify-items: ${(props) => props.theme.grid.justifyItems[0]};
  justify-content: ${(props) => props.theme.grid.justifyItems[0]};
  grid-template-rows: 1fr;
  margin-top: ${(props) => props.theme.spacing[4] + "px"};
  margin-right: auto;
  margin-left: auto;
  padding-top: ${(props) => props.theme.spacing[9] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[9] + "px"};

  background: ${(props) => props.theme.background.bloody};
`;

export const GridPanelFirst = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing[6] + "px"};
  grid-template-rows: 1fr 2fr;
  justify-items: ${(props) => props.theme.grid.justifyItems[0]};
  min-height: ${(props) => props.theme.percentage[10]};
`;

export const GridPanelSecond = styled.div`
  display: grid;
   gap: ${(props) => props.theme.spacing[6] + "px"};

  grid-template-rows: 2fr 1fr;
  min-height: ${(props) => props.theme.percentage[10]};
  justify-items: ${(props) => props.theme.grid.justifyItems[0]};
`;

export const GridPanelSmall = styled.div`
  grid-auto-rows: 2fr;

  padding-left: ${(props) => props.theme.spacing[10] + "px"};
`;

export const GridPanelTall = styled.div`
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
`;

export const GridImg = styled.img`
  max-width: ${(props) => props.theme.percentage[10]};
  min-height: ${(props) => props.theme.percentage[10]};
`;

export const HomePageTitle = styled.h1`
  max-width: ${(props) => props.theme.percentage[10]};
  min-height: ${(props) => props.theme.percentage[10]};
  margin-top: ${(props) => props.theme.spacing[10] + "px"};
  line-height: ${(props) => props.theme.listText.lineHeightM};
  color: ${(props) => props.theme.color.text};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-size: ${(props) => props.theme.listText.fontSizeL};

  background: ${(props) => props.theme.background.bloodyText};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const FormSearch = styled(Form)`
  position: relative;
`;

export const SearchIcon = styled(IoIosSearch)`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(50%) translateX(25%);
`;

export const SearchInput = styled(Field)`
  width: ${(props) => props.theme.spacing[14] + "px"};
  padding-left: ${(props) => props.theme.spacing[9] + "px"};
  padding-top: ${(props) => props.theme.spacing[2] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[2] + "px"};

  background-color: #fdf5e6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  transition: box-shadow 300ms ease;
  font-size: ${(props) => props.theme.listText.fontSizeM};
  border-radius: ${(props) => props.theme.radius[4] + "px"};

  &:hover,
  &:focus {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 30px rgba(255, 255, 255, 0.3), 0 0 45px rgba(255, 255, 255, 0.1);
  }
`;
