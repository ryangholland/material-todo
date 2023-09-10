/* eslint-disable react/prop-types */
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

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
          <Typography variant="body2" sx={{ textDecoration: "line-through" }}>
            {task.title}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" align="center" gutterBottom>
          Date Added: {task.date.toUTCString()}
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Notes"
          multiline
          rows={4}
          defaultValue=""
          fullWidth
          sx={{marginBlock: '1rem'}}
        />
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button variant="contained"><ArrowUpwardIcon /></Button>
          <Button variant="contained"><ArrowDownwardIcon /></Button>
          <Button variant="contained" color="error"><DeleteForeverIcon /></Button>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

export default Task;
