import { useParams } from "react-router-dom";
import * as SC from "../../Pages/GameByIdPage/Styles"
import { useEffect, useState } from "react";
import { getTeam } from "../../utilities/helpers";

const Developers = () => {

const { id } = useParams();

const [error, setError] = useState(null);
    const [team, setTeam] = useState({});
    
const {name, image, image_background} = team

    useEffect(() => {
      getTeam(id)
        .then(setTeam)
        .catch((error) => setError(error));
    }, [id]);

    return (
        <>
            {error && <h1>{error.message}</h1>}
        <SC.DevelopersTitle>Team:</SC.DevelopersTitle>
        
    
      </>
    );
}
 
export default Developers;