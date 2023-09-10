import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useState } from "react";

import Task from "./assets/components/Task";

function App() {
  const exampleTasks = [
    {
      id: crypto.randomUUID(),
      title: "This is an example task",
      date: new Date(),
      notes: "",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(exampleTasks);
  const [titleInput, setTitleInput] = useState("");

  function handleTaskSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: titleInput,
      date: new Date(),
      notes: "",
      completed: false,
    };

    console.log(newTask);

    setTasks([...tasks, newTask]);
    setTitleInput("");
  }

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" sx={{ margin: "auto" }}>
            Things to Do
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            pt: 2,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <form onSubmit={handleTaskSubmit}>
              <FormControl variant="standard" fullWidth>
                <Stack direction="row" spacing={1} alignItems="center">
                  <TextField
                    id="standard-basic"
                    label="Enter a new task"
                    variant="standard"
                    fullWidth
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                  />
                  <Button variant="contained" type="submit">
                    +
                  </Button>
                </Stack>
              </FormControl>
            </form>
          </Container>
        </Box>
        <hr></hr>
        <Box
          sx={{
            pt: 2,
            pb: 2,
          }}
        >
          <Container maxWidth="sm">
            <Stack spacing={2}>
              {tasks.map((task) => {
                return (
                  <Task task={task} key={task.id}></Task>
                );
              })}
            </Stack>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;
