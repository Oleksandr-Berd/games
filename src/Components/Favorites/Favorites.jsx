import { AiFillHeart } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";

import * as SC from "./FavoritesStyled";

const Favorites = ({ isLiked, addLiked, removeLiked, id }) => {
  const addFavorites = () => {
      addLiked(id);
  };

    const removeFavorite = () => {
        removeLiked(id)
    }
    
  return (
    <>
      {isLiked ? (
        <SC.Button onClick={removeFavorite}>
          <MdOutlineBookmarkAdded fill="green" size={32} />
        </SC.Button>
      ) : (
        <SC.Button onClick={addFavorites}>
          <AiFillHeart fill="red" size={32} />
        </SC.Button>
      )}
    </>
  );
};

export default Favorites;
