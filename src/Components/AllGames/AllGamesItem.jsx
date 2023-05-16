import * as SC from "../../Pages/AllGamesPage/Styles";

import { TfiMicrosoft } from "react-icons/tfi";
import { BsPlaystation } from "react-icons/bs";
import { RiXboxLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { FcLinux } from "react-icons/fc";
  
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
                  <SC.PlatformsList>{parentPlatform.map(el => {
                      switch (el.platform.slug) {
                        case "pc":
                          return (
                            <SC.PlatformItem>
                              <TfiMicrosoft />
                            </SC.PlatformItem>
                          );

                        case "playstation":
                          return (
                            <SC.PlatformItem>
                              <BsPlaystation />
                            </SC.PlatformItem>
                          );

                        case "xbox":
                          return (
                            <SC.PlatformItem>
                              <RiXboxLine />
                            </SC.PlatformItem>
                          );

                        case "mac":
                          return (
                            <SC.PlatformItem>
                              <AiOutlineApple />
                            </SC.PlatformItem>
                          );

                        case "linux":
                          return (
                            <SC.PlatformItem>
                              <FcLinux />
                            </SC.PlatformItem>
                          );

                          default:
                              return (
                                <SC.PlatformItem>
                                  <AiOutlineApple />
                                </SC.PlatformItem>
                              );;
                      }
                  }) }</SC.PlatformsList>
          <p>{calculatedRating}</p>
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
