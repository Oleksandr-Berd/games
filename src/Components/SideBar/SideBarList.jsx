import sideBar from "../../DataBase/db.json"
import SideBarItem from "./SideBarItem";

const SideBarList = () => {

    const {overall} = sideBar.data

    return (
      <ul>
        {overall.map(({ destination, name }) => (
          <SideBarItem destination={destination} name={name} key={name}/>
        ))}
      </ul>
    );
}
 
export default SideBarList;