import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import {useState} from "react";



function App() {
  const exampleTasks = [
    {
      id: crypto.randomUUID(),
      title: "This is an example task",
      date: new Date(),
      notes: "",
    }
  ]
  const [tasks, setTasks] = useState(exampleTasks);
  const [titleInput, setTitleInput] = useState("");

  function handleTaskSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      title: titleInput,
      date: new Date(),
      notes: "",
    }

    setTasks([...tasks, newTask])
    setTitleInput("")
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
                <Card key={task.id} variant="outlined" sx={{ p: 1 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Checkbox />
                    <Typography>{task.title}</Typography>
                  </Stack>
                </Card>
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
