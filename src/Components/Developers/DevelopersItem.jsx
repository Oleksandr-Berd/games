import * as SC from "./Style";

import defaultImage from "../../assets/images/default.jpg"

const DevelopersItem = ({ image, name, image_background }) => {
  

  return (
    <SC.TeamItem backgroundUrl={image_background}>
      <img src={image || defaultImage} alt="name" width={160} />
      <SC.ItemName>{name}</SC.ItemName>
    </SC.TeamItem>
  );
};

export default DevelopersItem;
