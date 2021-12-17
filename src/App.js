import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import ProviderSearch from "./components/providerSearch";
import SignUp from "./components/singUp";

import TopBarNavigation from "./components/topBarNavigation";
import UserDetails from "./components/userDetails";
import ProviderDetails from "./components/providerDetails";
import { useSelector } from "react-redux";
import UserSearch from "./components/userSearch";

const AuthRoute = (props) => {
  const loggedIn = useSelector((state) => state.loggedIn);

  if (loggedIn === false)
    return (
      <Route path="user-details" element={<Navigate to="/user-details" />} />
    );
  else if (loggedIn === true)
    return <Route path="home" element={<Navigate to="/home" />} />;
  return <Route {...props} />;
};

export default function App() {
  return (
    <Router>
      <TopBarNavigation />
      <div>
        {/* <AuthRoute /> */}
        <Routes>
          <Route path="home" element={<Navigate to="/about" />} />
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/provider-search" element={<ProviderSearch />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/user-details" element={<UserDetails />}></Route>
          <Route path="/user-search" element={<UserSearch />}></Route>
          <Route path="/provider-details" element={<ProviderDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
