import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getGameById, test } from "../../utilities/helpers";
import * as SC from "./Styles";

const GameByIdPage = () => {
  const { id } = useParams();
    const [game, setGame] = useState({});
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
      getGameById(id).then(setGame);
      test(id)
  }, [id]);
  const symbol = "<p>";
  const symbolToDelete = "</p>";

  let modifiedStr = description
    ?.replace(new RegExp(symbol, "g"), "")
    .replace(new RegExp(symbolToDelete, "g"), "");

  return (
    <SC.Container>
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
            <h3>Metacritic: </h3>
            <p>{metacritic}</p>
            <SC.MetacriticLink to={metacritic_url}>
              {metacritic_url}
            </SC.MetacriticLink>
          </SC.MetacriticCon>
        </SC.LeftSideContainer>
        <SC.ImageAdd src={background_image_additional} alt={name} />
      </SC.TitleContainer>
      <SC.Description>{modifiedStr}</SC.Description>
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
      <SC.BackButton to="/all" state={{ from: location }}>Back</SC.BackButton>
    </SC.Container>
  );
};

export default GameByIdPage;
