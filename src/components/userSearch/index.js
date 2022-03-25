import * as React from "react";
import { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Input from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateProviderModal from "../common/createProviderModal";
import { userSearchFirstName } from "../../redux/features/searchSlice";

const theme = createTheme();

// const [Input, setInput] = useState("");
export default class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userFirstName: "",
      userLastName: "",
      userDOB: "",
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(e) {
    this.setState({ userfirstName: e.target.value });
  }
  handleSubmit(e) {
    console.log("Your input value is: " + this.state.userfirtname);
    console.log("Your input value is: " + this.state.userlastname);
    console.log("Your input value is: " + this.state.userdob);
    // Send state to the server code
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              aTextFieldlignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              People Search
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {/* <input
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                  /> */}
                  <Input
                    onChange={this.updateInput}
                    required
                    fullWidth
                    id="userFirstName"
                    label="First Name"
                    name="userFirstName"
                    autoComplete="First Name"
                  />

                  <Input
                    required
                    fullWidth
                    id="userLasteName"
                    label="Last Name"
                    name="userLasteName"
                    autoComplete="Laste Name"
                  />
                  <Input
                    required
                    fullWidth
                    id="userDOB"
                    label="DOB"
                    name="userDOB"
                    autoComplete="DOB"
                  />
                </Grid>
              </Grid>
              <Button
                onSubmit={(e) => this.handleSubmit(e)}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Search
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
