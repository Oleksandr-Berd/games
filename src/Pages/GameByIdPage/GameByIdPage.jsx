import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { FidgetSpinner } from "react-loader-spinner";

import { getGameById } from "../../utilities/helpers";
import * as SC from "./Styles";
import GameNav from "../../Components/GameNav/GameNav";
import Description from "../../Components/Description/Description";

const GameByIdPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const {
    background_image,
    name,
    description,
    background_image_additional,
    genres,
    released,
    website,
    developers,
    metacritic,
    metacritic_url,
  } = game;

  useEffect(() => {
    setIsLoading(true);

    getGameById(id)
      .then(setGame)
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
    
  }, [id]);

  const symbol = "<p>";
  const symbolToDelete = "</p>";
  const symbolToRemove = "br />";
  const symbolRemove = "<";

  let modifiedStr = description
    ?.replace(new RegExp(symbol, "g"), "")
    ?.replace(new RegExp(symbolToDelete, "g"), "")
    ?.replace(new RegExp(symbolToRemove, "g"), "")
    ?.replace(new RegExp(symbolRemove, "g"), "");

  return (
    <SC.Container>
      {error && <h1>{error.message}</h1>}
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
          <SC.Image src={background_image} alt={name} />
          <SC.TitleContainer>
            <SC.LeftSideContainer>
              <SC.Title>{name}</SC.Title>

              <SC.WebLink to={website}>Website: {website}</SC.WebLink>
              <SC.GenresTitle>Genres:</SC.GenresTitle>
              <SC.GenresList>
                {genres &&
                  genres.map(({ name, image_background }) => (
                    <SC.GenresItem key={name}>
                      <SC.GenresImage
                        src={image_background}
                        alt={name}
                        width={36}
                      />
                      <h4>{name}</h4>
                    </SC.GenresItem>
                  ))}
              </SC.GenresList>
              <SC.MetacriticCon>
                <SC.MetacriticTitle>Metacritic: </SC.MetacriticTitle>
                <p>{metacritic}</p>
                <SC.MetacriticLink to={metacritic_url}>
                  {metacritic_url}
                </SC.MetacriticLink>
              </SC.MetacriticCon>
              <SC.DevelopersCon>
                <SC.DevelopersTitle>Developers: </SC.DevelopersTitle>
                <SC.Released>Released: {released}</SC.Released>
                <SC.DevelopersList>
                  {developers &&
                    developers.map(({ name, image_background }) => (
                      <SC.DevelopersItem key={name}>
                        <SC.DevelopersImg
                          src={image_background}
                          alt={name}
                          width={36}
                          height={36}
                        />
                        <p>{name}</p>
                      </SC.DevelopersItem>
                    ))}
                </SC.DevelopersList>
              </SC.DevelopersCon>
            </SC.LeftSideContainer>
            <SC.ImageAdd src={background_image_additional} alt={name} />
          </SC.TitleContainer>
          <Description description={modifiedStr} />
          <GameNav />
          <Outlet  />
          <SC.BackButton to="/all" state={{ from: location }}>
            Back
          </SC.BackButton>
        </>
      )}
    </SC.Container>
  );
};

export default GameByIdPage;
