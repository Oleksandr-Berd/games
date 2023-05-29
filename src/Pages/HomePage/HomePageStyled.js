import styled from "styled-components"

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
