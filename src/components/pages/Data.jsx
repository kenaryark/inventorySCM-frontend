import { Box } from "@chakra-ui/react";
import BasicFilterDemo from "../Data/tableAllData";
import { Accordion, AccordionTab } from "primereact/accordion";
export const Data = () => {
  return (
    // <Box pt={{ base: "50px", md: "50px", xl: "50px" }} height="100vh">
    <BasicFilterDemo />
    // <Accordion>
    // <AccordionTab>loremipsum</AccordionTab>
    // </Accordion>
    // </Box>
  );
};
