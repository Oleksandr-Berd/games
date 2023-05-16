import * as SC from "../../Pages/AllGamesPage/Styles"

import AllGamesItem from "./AllGamesItem";

const AllGamesList = ({ games }) => {
  return (
    <SC.AllGamesList>
      {games.map(
        ({ background_image, id, name, metacritic, ratings_count }) => (
          <AllGamesItem image={background_image} key={id} name={name} metacritic={metacritic} rating={ratings_count} />
        )
      )}
    </SC.AllGamesList>
  );
};

export default AllGamesList;
