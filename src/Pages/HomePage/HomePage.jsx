import * as SC from "../../Components/StyledComponents";

import { homePage, homePagePic, homeBottomImg } from "../../assets/images/images";

const HomePage = () => {
  return (
    <SC.HomePage>
      <SC.GridPanelFirst>
        <SC.GridPanelSmall>
          <SC.HomePageTitle>Welcome to your Dreams!</SC.HomePageTitle>
        </SC.GridPanelSmall>
        <SC.GridPanelTall>
          <SC.GridImg src={homePage} alt="bloodbornePic" height={512} />
        </SC.GridPanelTall>
      </SC.GridPanelFirst>
      <SC.GridPanelSecond>
        <SC.GridPanelTall>
          <SC.GridImg src={homePagePic} alt="bloodborne" height={512} />
        </SC.GridPanelTall>
        <SC.GridPanelSmall>
          <SC.GridImg src={homeBottomImg} alt="bloodborne" height={360} />
        </SC.GridPanelSmall>
      </SC.GridPanelSecond>
    </SC.HomePage>
  );
};

export default HomePage;
