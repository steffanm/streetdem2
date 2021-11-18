import React, { Component } from "react";

import { ThemeProvider } from "@mui/material/styles";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CreateServiceModal from "../common/createServiceModal";

import EditProviderModal from "../common/editProviderModal";

export class ProviderDetails extends Component {
  render() {
    return (
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Provider Name" secondary="Provider Name" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Address" secondary="Address" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary="Email" />
          </ListItem>
        </List>
        <br />
        <div>
          <EditProviderModal />
        </div>
      </div>
    );
  }
}

export default ProviderDetails;
