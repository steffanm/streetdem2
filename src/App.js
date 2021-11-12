import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import login from "./components/login";
import home from "./components/home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/home">home</Link>
            </li>
            <li>
              <Link to="/service">service</Link>
            </li>
            <li>
              <Link to="/provider">provider</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exsact path="/" element={<login />}></Route>
          <Route path="/home" element={<home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
