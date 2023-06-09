import Carousel from "react-bootstrap/Carousel";

import * as SC from "../../Pages/GameByIdPage/gameByIdPageStyles";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getScreenshots } from "../../utilities/helpers";
import { FidgetSpinner } from "react-loader-spinner";
import Modal from "../Modal/Modal";

function ScreenShots() {
  const { id } = useParams();
const [modalImage, setModalImage] = useState(null)
  const [error, setError] = useState(null);
  const [screenshots, setScreenshots] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getScreenshots(id)
      .then(setScreenshots)
      .catch((error) => setError(error))
      .finally(setIsLoading(false));
  }, [id]);



  const toggleModal = (evt) => {
    setModalImage(evt);
    setIsShowModal(!isShowModal);
   
  };

  return (
    <>
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
        <div>
          {error && <h3>{error.message}</h3>}
          <SC.ScreenShotsTitle>Screenshots</SC.ScreenShotsTitle>
          <SC.CustomCarousel fade>
            {screenshots.length &&
              screenshots.map(({ image }, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={idx}
                    onClick={() => toggleModal(image)}
                  />
                  {isShowModal ? (
                    <Modal image={modalImage} toggleModal={toggleModal} />
                  ) : null}
                  <Carousel.Caption>
                    <h3>{idx + 1}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
          </SC.CustomCarousel>
        </div>
      )}
    </>
  );
}

export default ScreenShots;
