import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getGameById } from "../../utilities/helpers";
import * as SC from "./Styles"

const GameByIdPage = () => {
     const { id } = useParams();
     const [game, setGame] = useState({});

    const { background_image, name, description } = game;
    
      useEffect(() => {
          getGameById(id).then(setGame);
          
         
      }, [id]);
    
     
    
    return (
      <SC.Container>
            <SC.Image src={background_image} alt={name} />
            <SC.Title>{name}</SC.Title>
            <SC.Description>{description}</SC.Description>
      </SC.Container>
    );
    

 }

export default GameByIdPage;