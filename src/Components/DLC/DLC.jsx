import { useParams } from "react-router-dom";
import * as SC from "./Style";
import { useEffect, useState } from "react";
import { getTeam } from "../../utilities/helpers";
import DevelopersItem from "./DevelopersItem";

const Developers = () => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [team, setTeam] = useState({});

  useEffect(() => {
    getTeam(id)
      .then(setTeam)
      .catch((error) => setError(error));
  }, [id]);

  return (
    <>
      {" "}
      {error && <h1>{error.message}</h1>}
      <SC.DevelopersTitle>Team:</SC.DevelopersTitle>
      <SC.TeamList>
        {team.length &&
          team.map(({ name, image, image_background }) => (
            <DevelopersItem
              name={name}
              image={image}
              image_background={image_background}
              key={name}
            />
          ))}
      </SC.TeamList>
    </>
  );
};

export default Developers;
