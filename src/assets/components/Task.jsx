/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

import { useState } from "react";

function Task(props) {
  const task = props.task;
  const [expand, setExpand] = useState(false);

  return (
    <Accordion expanded={expand}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon
            style={{ cursor: "pointer " }}
            onClick={() => setExpand(!expand)}
          />
        }
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Checkbox />
          <Typography variant="body2">{task.title}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2">
          Date Added: {task.date.toUTCString()}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Task;
