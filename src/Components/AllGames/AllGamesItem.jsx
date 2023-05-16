import * as SC from "../../Pages/AllGamesPage/Styles";

import { TfiMicrosoft } from "react-icons/tfi";
import { BsPlaystation } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
import { SiNintendo3Ds } from "react-icons/si";

const AllGamesItem = ({
  image,
  name,
  metacritic,
  ratingsCount,
  rating,
  ratingTop,
  parentPlatform,
}) => {
  const calculatedRating = Math.ceil((rating / ratingTop) * 100);

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
                  return null
              }
            })}
          </SC.PlatformsList>
          <SC.Rating calculatedRating={calculatedRating}>
            {calculatedRating}
          </SC.Rating>
        </SC.PlatformContainer>
      </SC.AllGamesItemTopContainer>
      <SC.AllGameItemTitle>{name}</SC.AllGameItemTitle>

      <div>
        <p>{ratingsCount}</p>
      </div>
    </SC.AllGamesItem>
  );
};

export default AllGamesItem;