import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";



export const Slide = styled(SwiperSlide)`
  width: ${(props) => props.theme.percentage[10]};

  background: ${(props) => props.theme.background.bloody};
`;

export const SlideContainer = styled.div`
position: relative;

  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};
  padding-right: ${(props) => props.theme.spacing[2] + "px"};

  background: ${(props) => props.theme.background.bloody};
`;

export const ButtonContainer = styled.div`
  width: ${(props) => props.theme.percentage[10]};
  display: ${(props) => props.theme.flex.display};
  justify-content: ${(props) => props.theme.flex.justifyContent[2]};
  padding-top: ${(props) => props.theme.spacing[5] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[5] + "px"};


  & > *:not(:last-child) {
    margin-right: ${(props) => props.theme.spacing[5] + "px"};
  }
`;

export const Title = styled.h2`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeXM};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
`;

export const Button = styled.button`
  padding-top: ${(props) => props.theme.spacing[3] + "px"};
  padding-bottom: ${(props) => props.theme.spacing[3] + "px"};
  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};

  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  background: ${(props) => props.theme.color.transparent};
  border: none;
  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};
    transition: ${(props) => props.theme.transition.color};
  }
`;

export const Image = styled.img`
  width: ${(props) => props.theme.percentage[2]};
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${(props) => props.theme.spacing[5] + "px"};

  border-radius: ${props => props.theme.radius[3]+"px"};
`;

export const Video = styled.video`
  width: ${(props) => props.theme.percentage[10]};
`;

export const BackButton = styled(NavLink)`
position: absolute;
top: 0;
right: 0;
z-index: 10;
transform: translateY(300%);

  padding-right: ${(props) => props.theme.spacing[5] + "px"};
  padding-left: ${(props) => props.theme.spacing[5] + "px"};

  text-decoration: ${(props) => props.theme.listText.textDecor};
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeM};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
  background: ${(props) => props.theme.color.transparent};
  transition: ${(props) => props.theme.transition.color};

  &:hover,
  &:focus {
    color: ${(props) => props.theme.color.hover};
    transition: ${(props) => props.theme.transition.color};
  }
`;

export const NoTrailer = styled.h1`
margin-right: auto;
margin-left: auto;
text-align: center;

  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.listText.fontSizeL};
  font-family: ${(props) => props.theme.listText.fontFamilyTitle};
  font-style: ${(props) => props.theme.listText.fontStyleItalic};
  font-weight: ${(props) => props.theme.listText.fontWeightBold};
`;