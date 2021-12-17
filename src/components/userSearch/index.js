import * as React from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateProviderModal from "../common/createProviderModal";

const theme = createTheme();

export default function UserSearch() {
  return (
    <ThemeProvider theme={theme}>
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
          <Typography component="h1" variant="h5">
            People Search
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="userFirstName"
                  label="First Name"
                  name="userFirstName"
                  autoComplete="First Name"
                />{" "}
                <TextField
                  required
                  fullWidth
                  id="userLasteName"
                  label="Last Name"
                  name="userLasteName"
                  autoComplete="Laste Name"
                />
                <TextField
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
