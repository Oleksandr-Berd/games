import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation, useParams } from "react-router-dom";
import { getTrailers } from "../../utilities/helpers";
import { FidgetSpinner } from "react-loader-spinner";
import * as SC from "./TrailersStyle";

const Trailers = () => {
    const { id } = useParams();
    const location = useLocation()
  const [trailers, setTrailers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getTrailers(id)
      .then(setTrailers)
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, [id]);
    
    useEffect(() => {
      const handleKeyDown = (event) => {
        if (event.code === "Space" && swiper) {
          const activeSlideIndex = swiper.realIndex;
          const activeSlideVideo =
            swiper.slides[activeSlideIndex].querySelector("video");

          if (activeSlideVideo) {
            event.preventDefault();
            if (activeSlideVideo.paused) {
              activeSlideVideo.play();
            } else {
              activeSlideVideo.pause();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, [swiper]);
  const handleSlideNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
     const handleSlidePrev = () => {
       if (swiper) {
         swiper.slidePrev();
       }
     };
console.log(trailers);
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
        <>
          {error && <h3>{error.message}</h3>}
          <SC.BackButton to="/all" state={{ from: location }}>
            Back
          </SC.BackButton>
          {trailers.length !== 0 ? (
            <>
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  prevEl: null,
                  nextEl: null,
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={setSwiper}
                onSlideChange={() => {
                  console.log("Slide changed");
                }}
              >
                {
                  trailers.map(({ name, preview, data }, idx) => (
                    <SwiperSlide key={name}>
                      <SC.Slide>
                        <SC.SlideContainer className="card">
                          <SC.ButtonContainer>
                            <SC.Button onClick={handleSlidePrev}>
                              Slide to the prev slide
                            </SC.Button>
                            <SC.Button onClick={handleSlideNext}>
                              Slide to the next slide
                            </SC.Button>
                          </SC.ButtonContainer>

                          <SC.Title>{name}</SC.Title>
                          <SC.Image src={preview} alt={name} />
                          <div className="video-container">
                            <SC.Video controls>
                              <source src={data.max} type="video/mp4" />
                            </SC.Video>
                          </div>
                        </SC.SlideContainer>
                      </SC.Slide>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </>
          ) : (
            <SC.NoTrailer>There is no any trailer</SC.NoTrailer>
          )}
        </>
      )}
    </>
  );
};

export default Trailers;
