import * as SC from "./HeaderStyled"

import AuthNav from "../AuthNav/AuthNav";
import Logo from "../Logo/Logo";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <SC.Header>
      <Logo />
      <SearchForm />
      <AuthNav />
    </SC.Header>
  );
};

export default Header;
