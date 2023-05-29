import { useContext, useEffect, useState } from "react";
import { FidgetSpinner } from "react-loader-spinner";

import * as SC from "./AllGamesPageStyles"
import AllGamesList from "../../Components/AllGames/AllGamesList";
import { getAllGames } from "../../utilities/helpers";
import queryContext from "../../context/queryContext";

const AllGamesPage = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6)
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const {query} = useContext(queryContext)
  

  const handlePage = (evt) => {
    switch (evt.target.id) {
      case "nextButton":
        setPage((prev) => prev + 1);
        break;
      case "prevButton":
        if (page > 1) {
          setPage((prev) => prev - 1);
        }
        break;
      default:
        return;
    }
  };
  useEffect(() => {
    setIsLoading(true);

    const fetchGames = () => {
  
      getAllGames(page, limit, query)
        .then((response) => {
          setGames(response);
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false));
    };

    fetchGames();
  }, [limit, page, query]);

  return (
    <SC.AllGameContainer>
      {isLoading ? (
        <FidgetSpinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
          ballColors={["#ff0000", "#00ff00", "#0000ff"]}
          backgroundColor="#F4442E"
        />
      ) : (
        <>
          <AllGamesList games={games} />
          <SC.ButtonContainer>
            <SC.Button
              type="button"
              id="prevButton"
              onClick={handlePage}
              disabled={page === 1}
            >
              Prev
              </SC.Button>
              <p>--{page}--</p>
            <SC.Button type="button" id="nextButton" onClick={handlePage}>
              Next
            </SC.Button>
          </SC.ButtonContainer>
        </>
      )}
      {error && <div>{error}</div>}
    </SC.AllGameContainer>
  );
};

export default AllGamesPage;
