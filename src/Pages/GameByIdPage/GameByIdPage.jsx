import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { getGameById } from "../../utilities/helpers";
import * as SC from "./Styles";

const GameByIdPage = () => {
  const { id } = useParams();
  const [game, setGame] = useState({});

  const {
    background_image,
    name,
    description,
    background_image_additional,
    genres,
    released,
      website,
    developers,
  } = game;

  useEffect(() => {
    getGameById(id).then(setGame);
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
          <p>Released: {released}</p>
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
        </SC.LeftSideContainer>
        <SC.ImageAdd src={background_image_additional} alt={name} />
      </SC.TitleContainer>
      <SC.Description>{modifiedStr}</SC.Description>
    </SC.Container>
  );
};

export default GameByIdPage;
