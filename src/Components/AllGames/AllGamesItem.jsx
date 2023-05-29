import * as SC from "../../Pages/AllGamesPage/AllGamesPageStyles";

import { TfiMicrosoft } from "react-icons/tfi";
import { BsPlaystation } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import { SiNintendo3Ds } from "react-icons/si";
import { CgMathPlus } from "react-icons/cg";
import { useLocation } from "react-router-dom";

const AllGamesItem = ({
  image,
  name,
  ratingsCount,
  rating,
  ratingTop,
  parentPlatform,
  id,
}) => {
  const location = useLocation();

  const calculatedRating = Math.ceil((rating / ratingTop) * 100) || 0;

  return (
    <SC.AllGamesItem>
      <SC.AllGameItemImage src={image} alt="" />

      <SC.AllGamesItemTopContainer>
        <SC.PlatformContainer>
          <SC.PlatformsList>
            {parentPlatform.map((el) => {
              switch (el.platform.slug) {
                case "pc":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <TfiMicrosoft />
                    </SC.PlatformItem>
                  );

                case "playstation":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <BsPlaystation />
                    </SC.PlatformItem>
                  );

                case "xbox":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <RiXboxLine />
                    </SC.PlatformItem>
                  );

                case "mac":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <AiOutlineApple />
                    </SC.PlatformItem>
                  );

                case "linux":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <FcLinux />
                    </SC.PlatformItem>
                  );

                case "nintendo":
                  return (
                    <SC.PlatformItem key={el.platform.slug}>
                      <SiNintendo3Ds />
                    </SC.PlatformItem>
                  );

                default:
                  return null;
              }
            })}
          </SC.PlatformsList>

          <SC.Rating calculatedRating={calculatedRating}>
            {calculatedRating}
          </SC.Rating>
        </SC.PlatformContainer>
        <SC.AllGamesLink
          to={`${id}`}
          state={{ from: location }}
          location={location}
        >
          <SC.AllGameItemTitle>{name}</SC.AllGameItemTitle>
        </SC.AllGamesLink>
      </SC.AllGamesItemTopContainer>

      <SC.AllGamesItemRateCon>
        <CgMathPlus />
        <p>{ratingsCount}</p>
      </SC.AllGamesItemRateCon>
    </SC.AllGamesItem>
  );
};

export default AllGamesItem;
