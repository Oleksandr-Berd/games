import * as SC from "../../Pages/AllGamesPage/Styles";

const AllGamesItem = ({ image, name, metacritic, ratings_count }) => {
  return (
    <SC.AllGamesItem>
      <SC.AllGameItemImage src={image} alt="" />
      
        <SC.AllGamesItemTopContainer>
          <div>
            <p>{metacritic}</p>
          </div>
        </SC.AllGamesItemTopContainer>
        <SC.AllGameItemTitle>{name}</SC.AllGameItemTitle>
        <div>
          <p>{ratings_count}</p>
        </div>
      
    </SC.AllGamesItem>
  );
};

export default AllGamesItem;
