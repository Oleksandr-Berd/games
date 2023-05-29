import Accordion from "react-bootstrap/Accordion";

import * as SC from "./DescriptionStyles"

function Description({ description }) {
  return (
    <SC.AccordionDescriptionTitle
      defaultActiveKey="0"
      alwaysOpen={false}
    >
      <SC.AccordionDescription eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </SC.AccordionDescription>
    </SC.AccordionDescriptionTitle>
  );
}

export default Description;
