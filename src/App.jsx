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
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useState } from "react";

import Task from "./assets/components/Task";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Created by "}
      <Link color="inherit" href="https://mui.com/">
        Ryan Holland
      </Link>
      {" © "}
      {new Date().getFullYear()}
    </Typography>
  );
}

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

    setTasks([...tasks, newTask]);
    setTitleInput("");
  }

  function handleToggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      })
    );
  }

  function handleDeleteTask(id) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      })
    );
  }

  return (
    <>
      <ThemeProvider theme={darkTheme}>
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
            <Container maxWidth="md">
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
                      <AddIcon />
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
            <Container maxWidth="md">
              <Stack
                direction="row"
                justifyContent="space-around"
                spacing={2}
                sx={{ mb: 2 }}
              >
                <Button size="small" variant="contained">
                  All Tasks
                </Button>
                <Button size="small" variant="outlined">
                  In Progess
                </Button>
                <Button size="small" variant="outlined">
                  Completed
                </Button>
              </Stack>
              <Stack spacing={2}>
                {tasks.map((task) => {
                  return (
                    <Task
                      task={task}
                      key={task.id}
                      onToggleCompleted={handleToggleCompleted}
                      onDeleteTask={handleDeleteTask}
                    ></Task>
                  );
                })}
              </Stack>
            </Container>
          </Box>
          <hr></hr>
          <Box sx={{ bgcolor: "background.paper", p: 1 }} component="footer">
            <Copyright />
          </Box>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
