import { CryptoProps, UserHasCrypto } from "@/Utils/types";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

export default function AccordionExpandDefault({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Accordion className="w-1/4" defaultExpanded>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>See Cryptos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
