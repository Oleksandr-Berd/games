import { useState } from "react";
import * as SC from "../../Pages/AllGamesPage/AllGamesPageStyles"

import AllGamesItem from "./AllGamesItem";

const AllGamesList = ({ games }) => {

  const [favorites, setFavorites] = useState([]);
  
  const addLiked = (id) => {
    setFavorites((prev) => [...prev, id]);
  };

  const removeLiked = (id) => {
    
    setFavorites(favorites.filter((el) => el !== id));
  
  }
// // const likedGames = games.filter(el => favorites.includes(el.id))
//   useEffect(() => {
//     localStorage.setItem("favorites", favorites);
   
//   }, [favorites]);
  
  return (
    <SC.AllGamesList>
      {games.map(
        ({
          background_image,
          id,
          name,
          ratings_count,
          rating,
          rating_top,
          parent_platforms,
        }) => (
          <AllGamesItem
            favorites={favorites}
            addLiked={addLiked}
            removeLiked={removeLiked}
            image={background_image}
            key={id}
            name={name}
            ratingsCount={ratings_count}
            rating={rating}
            ratingTop={rating_top}
            parentPlatform={parent_platforms}
            id={id}
          />
        )
      )}
    </SC.AllGamesList>
  );
};

export default AllGamesList;
