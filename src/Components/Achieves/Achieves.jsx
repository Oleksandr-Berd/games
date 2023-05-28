import { useParams } from "react-router-dom";

import * as SC from "./AchieveStyle"
import { FidgetSpinner } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { getAchieves } from "../../utilities/helpers";

const Achieves = () => {
    const {id} = useParams
    const [achieves, setAchieves] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        getAchieves(id).then(setAchieves).catch(error=>setError(error)).finally(()=>setIsLoading(false))

    }, [id])
    return (
      <>
        {" "}
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
                        
            <SC.Title>Achievements</SC.Title>
            <ul>
              {achieves && achieves.length ? achieves.map(({ name, description, image, percent }) => (
                  <li
                    name={name}
                    image={image}
                    description={description}
                    percent={percent}
                   
                    key={name}
                  />
                ))
                            :(
                            <SC.NoAchieves style={{color:"#fff"}}>Sorry, There is no any data about achievements</SC.NoAchieves>
                )}
            </ul>
          </>
        )}
      </>
    );
}
 
export default Achieves;