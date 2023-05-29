
import * as SC from "./GameNavStyles"

const GameNavItem = ({ destination, name }) => {
  return (
    <SC.Item key={name}>
          <SC.Link to={destination}>{name}</SC.Link>
    </SC.Item>
  );
};
 
export default GameNavItem;