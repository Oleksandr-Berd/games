import Carousel from "react-bootstrap/Carousel";

import * as SC from "../../Pages/GameByIdPage/Styles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScreenshots } from "../../utilities/helpers";

function ScreenShots() {
  const { id } = useParams();

  const [error, setError] = useState(null);
  const [screenshots, setScreenshots] = useState({});
  
  useEffect(() => {
    getScreenshots(id)
      .then(setScreenshots)
      .catch((error) => setError(error));
  }, [id]);

  return (
    <div>
      {error && <h3>{error.message}</h3>}
      <SC.ScreenShotsTitle>Screenshots</SC.ScreenShotsTitle>
      <SC.CustomCarousel fade>
        {screenshots.length &&
          screenshots.map(({ image }, idx) => (
            <Carousel.Item key={idx}>
              <img className="d-block w-100" src={image} alt={idx} />
              <Carousel.Caption>
                <h3>{idx + 1}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </SC.CustomCarousel>
    </div>
  );
}

export default ScreenShots;
