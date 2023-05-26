import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { getGameById, getScreenshots } from "../../utilities/helpers";
import * as SC from "./Styles";
// import ScreenShots from "../../Components/Screenshots/Screenshots";
import GameNav from "../../Components/GameNav/GameNav";

const GameByIdPage = () => {
  const { id } = useParams();
    const [game, setGame] = useState({});
    const [error, setError] = useState(null);
    // const [screenshots, setScreenshots] = useState({})
    const location = useLocation()

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
    metacritic_url
  } = game;

  useEffect(() => {
      getGameById(id).then(setGame).catch(error => setError(error));
    //   getScreenshots(id).then(setScreenshots).catch(error => setError(error));
  }, [id]);
  const symbol = "<p>";
  const symbolToDelete = "</p>";

  let modifiedStr = description
    ?.replace(new RegExp(symbol, "g"), "")
    .replace(new RegExp(symbolToDelete, "g"), "");

  return (
      <SC.Container>
          {error && <h1>{error.message}</h1>}
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
        </SC.LeftSideContainer>
        <SC.ImageAdd src={background_image_additional} alt={name} />
      </SC.TitleContainer>
          <SC.Description>{modifiedStr}</SC.Description>
          <GameNav/>
      <SC.DevelopersTitle>Developers</SC.DevelopersTitle>
      <SC.Released>Released: {released}</SC.Released>
      <SC.DevelopersList>
        {developers &&
          developers.map(({ name, image_background }) => (
            <SC.DevelopersItem key={name}>
              <SC.DevelopersImg
                src={image_background}
                alt={name}
                width={56}
                height={56}
              />
              <p>{name}</p>
            </SC.DevelopersItem>
          ))}
          </SC.DevelopersList>
         <Outlet/>
      <SC.BackButton to="/all" state={{ from: location }}>Back</SC.BackButton>
    </SC.Container>
  );
};

export default GameByIdPage;
