import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons-material/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const names = [
  "Kendriya Vidyalaya, Pattom Thiruvananthapuram.",
  "Kendriya Vidyalaya, IIT Madras, Chennai.",
  "GVHSS for Girls, Nadakkavu, Kozhikode.",
  "Kendriya Vidyalaya, IIT Bombay, Powai.",
  "Rajkiya Pratibha Vikas Vidyalaya, Dwarka, Delhi.",
  "Sainik School, Amaravathinagar",
  "Government Model Sanskriti Senior Secondary School, Sector 43",
  "Government Model Senior Secondary School, Sector-19C",
  "Odisha Adarsha Vidyalaya, Parimala",
  "Odisha Adarsha Vidyalaya Dhobatota Phulbani Kandhamal, Dhobatota",
];

const boards = ["state board", "cbse", "icse"];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [userClass, setUserClass] = React.useState("");
  const [schoolBoard, setSchoolBoard] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3005/api/consumer/register", //change the signup location
        {
          name,
          email,
          'schoolname':schoolName,
          'class':userClass,
          'board':schoolBoard,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (data.success === true) {
        localStorage.setItem("email", email);
        //document.cookie = `token=${data.token}; path=/`;
        // OR you can use localStorage
        //localStorage.setItem("token", data.token);
        navigate(`/user/`); //Put the proper address here
      } else {
        console.log("Please check username and password");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            User sign up
          </Typography>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/creator/register" variant="body2">
                Are you a creator? Click here!
              </Link>
            </Grid>
          </Grid>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Select your school name</InputLabel>
                  <Select
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                  >
                    {names.map((name, index) => (
                      <MenuItem key={index} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Select your class</InputLabel>
                  <Select
                    value={userClass}
                    onChange={(e) => setUserClass(e.target.value)}
                  >
                    {Array.from({ length: 12 }, (_, index) => index + 1).map(
                      (number) => (
                        <MenuItem key={number} value={number}>
                          {number}
                        </MenuItem>
                      )
                    )}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Select your school board</InputLabel>
                  <Select
                    value={schoolBoard}
                    onChange={(e) => setSchoolBoard(e.target.value)}
                  >
                    {boards.map((board, index) => (
                      <MenuItem key={index} value={board}>
                        {board}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to the terms and conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
