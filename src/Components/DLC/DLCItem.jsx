import * as SC from "./DLCStyle";

import defaultImage from "../../assets/images/default.jpg";

const DLCItem = ({ image, name, rating, released, ratingTop }) => {

const calculatedRating = Math.ceil((rating / ratingTop) * 100) || 0;

  return (
    <SC.DLCItem>
      <img src={image || defaultImage} alt="name" width={320} height={220} />
      <SC.DLCItemName>{name}</SC.DLCItemName>
      <SC.DLCRealized>Released: {released}</SC.DLCRealized>
      <SC.DLCRating calculatedRating={calculatedRating}>
        {calculatedRating}
      </SC.DLCRating>
    </SC.DLCItem>
  );
};

export default DLCItem;
