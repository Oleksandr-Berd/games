import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getGameById } from "../../utilities/helpers";
import * as SC from "./Styles"

const GameByIdPage = () => {
     const { id } = useParams();
     const [game, setGame] = useState({});

    const { background_image, name, description, background_image_additional } =
      game;
    
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
          <SC.Title>{name}</SC.Title>
          <SC.ImageAdd src={background_image_additional} alt={name} />
        </SC.TitleContainer>
        <SC.Description>{modifiedStr}</SC.Description>
      </SC.Container>
    );
    

 }

export default GameByIdPage;