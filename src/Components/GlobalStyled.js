
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



