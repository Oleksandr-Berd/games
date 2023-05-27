import * as SC from "./Style";

import defaultImage from "../../assets/images/default.jpg";

const DLCItem = ({ image, name, rating, released, ratingTop }) => {
  return (
    <li backgroundUrl={image}>
      <img src={image || defaultImage} alt="name" width={160} />
      <h3>{name}</h3>
    </li>
  );
};

export default DLCItem;
