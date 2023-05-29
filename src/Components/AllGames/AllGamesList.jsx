import * as SC from "../../Pages/AllGamesPage/AllGamesPageStyles"

import AllGamesItem from "./AllGamesItem";

const AllGamesList = ({ games }) => {



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
