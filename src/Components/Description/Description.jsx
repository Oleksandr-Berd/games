import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import * as SC from "./DescriptionStyles";

function Description({ description }) {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Description</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <SC.DescriptionText>{description}</SC.DescriptionText>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Description;

