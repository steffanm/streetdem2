import React, { Component } from "react";
import { useDispatch } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CreateServiceModal from "../common/createServiceModal";
import EditUserModal from "../common/editUserModal";
import { userLogIn, userLogOut } from "../../redux/features/userSlice";

// export class UserDetails extends Component {

function UserDetails(props) {
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(userLogIn("foo"))}>login</button>
      <button onClick={() => dispatch(userLogOut("foo"))}>logout</button>

      <div>
        <CreateServiceModal />
        <EditUserModal />
      </div>
    </div>
  );
}

export default UserDetails;
