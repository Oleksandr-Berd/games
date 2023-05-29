
import * as SC from "../Header/HeaderStyled";

const AuthNav = () => {
  return (
    <nav>
      <SC.AuthNav>
        <li>
          <SC.Link to="/login">Login</SC.Link>
        </li>
        <li>
          <SC.Link to="/signin">Sign In</SC.Link>
        </li>
      </SC.AuthNav>
    </nav>
  );
};

export default AuthNav;
