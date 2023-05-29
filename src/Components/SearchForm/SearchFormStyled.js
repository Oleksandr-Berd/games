import { Field, Form } from "formik";
import { IoIosSearch } from "react-icons/io";

import styled from "styled-components";

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
