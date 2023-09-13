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
import Modal from "@mui/material/Modal";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useState, useEffect } from "react";

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
      <Link color="inherit" href="https://github.com/ryangholland">
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
      visible: true,
    },
  ];
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("taskList")) ?? exampleTasks);
  const [titleInput, setTitleInput] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [visible, setVisible] = useState("all");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks))
  }, [tasks])

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  function handleTaskSubmit(e) {
    e.preventDefault();

    if (titleInput === "") return;

    const newTask = {
      id: crypto.randomUUID(),
      title: titleInput,
      date: new Date(),
      notes: "",
      completed: false,
      visible: true,
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

  function handleClearCompleted() {
    setTasks(
      tasks.filter((task) => {
        return task.completed === false;
      })
    );
  }

  function handleDeleteAll() {
    setTasks([]);
    handleModalClose();
  }

  function handleTaskFilter(event, newFilter) {
    if (newFilter === "all") {
      setTasks(
        tasks.map((task) => {
          task.visible = true;
          return task;
        })
      );
    } else if (newFilter === "progress") {
      setTasks(
        tasks.map((task) => {
          if (task.completed) {
            task.visible = false;
          } else {
            task.visible = true;
          }
          return task;
        })
      );
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.completed) {
            task.visible = true;
          } else {
            task.visible = false;
          }
          return task;
        })
      );
    }

    setVisible(newFilter);
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
              <ToggleButtonGroup
                value={visible}
                exclusive
                size="small"
                aria-label="text alignment"
                fullWidth
                color="primary"
                sx={{ mb: 2 }}
                onChange={handleTaskFilter}
              >
                <ToggleButton value="all" aria-label="All Tasks">
                  All Tasks
                </ToggleButton>
                <ToggleButton value="progress" aria-label="In Progress">
                  In Progress
                </ToggleButton>
                <ToggleButton value="completed" aria-label="Completed">
                  Completed
                </ToggleButton>
              </ToggleButtonGroup>

              {tasks.length === 0 && (
                <Typography variant="h5" align="center" sx={{ mt: 4 }}>
                  You have nothing to do!
                </Typography>
              )}
              <Stack spacing={2}>
                {tasks.map((task) => {
                  if (task.visible) {
                    return (
                      <Task
                        task={task}
                        key={task.id}
                        onToggleCompleted={handleToggleCompleted}
                        onDeleteTask={handleDeleteTask}
                      ></Task>
                    );
                  }
                })}
              </Stack>
              {tasks.length > 0 && (
                <Stack
                  direction="row"
                  sx={{ mt: 2, mx: 2 }}
                  justifyContent="space-between"
                >
                  <Button
                    size="small"
                    variant="outlined"
                    color="success"
                    onClick={handleClearCompleted}
                  >
                    Clear Completed
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="error"
                    onClick={handleModalOpen}
                  >
                    Clear All
                  </Button>
                </Stack>
              )}
            </Container>
          </Box>
          <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "40%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "90%",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
                textAlign: "center",
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Are you sure you want to clear all tasks?
              </Typography>
              <Stack
                direction="row"
                justifyContent="space-around"
                spacing={1}
                sx={{ mt: 2 }}
              >
                <Button variant="outlined" onClick={handleModalClose}>
                  Cancel
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleDeleteAll}
                >
                  Clear All
                </Button>
              </Stack>
            </Box>
          </Modal>
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
