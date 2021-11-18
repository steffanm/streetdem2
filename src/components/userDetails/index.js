import React, { Component } from "react";

import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CreateServiceModal from "../common/createServiceModal";
import EditUserModal from "../common/editUserModal";

export class UserDetails extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary="firstName" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary="lastName" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="email" />
          </ListItem>
        </List>
        <br />
        <div>
          <CreateServiceModal />
          <EditUserModal />
        </div>
      </div>
    );
  }
}

export default UserDetails;
