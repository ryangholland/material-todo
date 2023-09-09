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

function App() {
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
            <form onSubmit={console.log("Form submitted")}>
              <FormControl variant="standard" fullWidth>
                <TextField
                  id="standard-basic"
                  label="Enter a new task"
                  variant="standard"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" type="submit">
                  Add Task
                </Button>
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
            <Card variant="outlined" sx={{p:2}}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Checkbox />
                <Typography>
                  This is a task. Yep. A task.
                </Typography>
              </Stack>
            </Card>
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;
