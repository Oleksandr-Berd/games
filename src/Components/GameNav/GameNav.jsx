import * as SC from "./GameNavStyles"
import gameData from "../../DataBase/db.json"
import GameNavItem from "./GameNavItem";

const {gameAddInfo} = gameData.data

const GameNav = () => {

    return (
      <SC.List>
        {gameAddInfo.map(({ destination, name }) => (
          <GameNavItem destination={destination} name={name} key={name} />
        ))}
      </SC.List>
    );
}
 
export default GameNav;