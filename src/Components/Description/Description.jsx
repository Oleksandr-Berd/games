import {
  AccordionItemPanel,
} from "react-accessible-accordion";

import * as SC from "./DescriptionStyles";

function Description({ description }) {
  return (
    <SC.Container allowZeroExpanded>
      <SC.Item>
        <SC.Heading>
          <SC.Button>Description</SC.Button>
        </SC.Heading>
        <AccordionItemPanel>
          <SC.DescriptionText>{description}</SC.DescriptionText>
        </AccordionItemPanel>
      </SC.Item>
    </SC.Container>
  );
}

export default Description;

