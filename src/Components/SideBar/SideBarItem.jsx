import sideBar from "../../DataBase/db.json";

import * as SC from "./Styles";

const SideBarItem = ({ destination, name }) => {
  const { data } = sideBar;
  const dataArray = Object.entries(data);
 

    
  return (
    <SC.SideBarItem key={name}>
      <SC.SideBarTitleLink to={destination}>{name}</SC.SideBarTitleLink>
      <SC.SubListSideBar>
        {dataArray
          .filter((el) => el.includes(destination))
          .flatMap((el) => el[1])
          .map((el) => (
            <SC.SubItemSideBar key={el.name}>
              <SC.SubLinkSideBar to={el.destination}>{el.name}</SC.SubLinkSideBar>
            </SC.SubItemSideBar>
          ))}
      </SC.SubListSideBar>
    </SC.SideBarItem>
  );
};

export default SideBarItem;
