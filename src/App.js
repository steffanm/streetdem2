import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import ProviderSearch from "./components/providerSearch";
import SignUp from "./components/singUp";

import TopBarNavigation from "./components/topBarNavigation";

export default function App() {
  return (
    <Router>
      <TopBarNavigation />
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/providerSearch" element={<ProviderSearch />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
