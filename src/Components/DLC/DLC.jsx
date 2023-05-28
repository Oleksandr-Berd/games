import { useParams } from "react-router-dom";
import * as SC from "./Style";
import { useEffect, useState } from "react";
import { getDLC } from "../../utilities/helpers";
import { FidgetSpinner } from "react-loader-spinner";
import DLCItem from "./DLCItem";

const DLC = () => {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [dlc, setDlc] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDLC(id)
      .then(setDlc)
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);

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
          <SC.DLCTitle>DLC:</SC.DLCTitle>
          <SC.DLCList>
            {dlc && dlc.length ? (
              dlc.map(
                ({ name, background_image, released, rating, rating_top }) => (
                  <DLCItem
                    name={name}
                    image={background_image}
                    released={released}
                    rating={rating}
                    ratingTop={rating_top}
                    key={name}
                  />
                )
              )
            ) : (
              <h1>Sorry, There is no any data about DLC</h1>
            )}
          </SC.DLCList>
        </>
      )}
    </>
  );
};

export default DLC;
