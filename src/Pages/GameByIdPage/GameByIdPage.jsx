import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../utilities/helpers";

const GameByIdPage = () => {
     const { id } = useParams();
     const [game, setGame] = useState({});

      useEffect(() => {
          getGameById(id).then(setGame);
          
         
      }, [id]);
    
     console.log(game);
    
    return <div>FCK</div>;
    

 }

export default GameByIdPage;