// import React, { Fragment } from "react";
import React, { Component } from "react";
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
// import { useSelector } from "react-redux";
import UserSearch from "./components/userSearch";

// const AuthRoute = (props) => {
//   const loggedIn = useSelector((state) => state.loggedIn);

//   if (loggedIn === false)
//     return (
//       <Route path="user-details" element={<Navigate to="/user-details" />} />
//     );
//   else if (loggedIn === true)
//     return <Route path="home" element={<Navigate to="/home" />} />;
//   return <Route {...props} />;
// };

export default class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    fetch("http://localhost:5000/express_backend")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <TopBarNavigation />
          <div>
            <Routes>
              <Route path="home" element={<Navigate to="/" />} />
              <Route path="/login" element={<Login />}></Route>

              <Route path="/" element={<Home />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route
                path="/provider-search"
                element={<ProviderSearch />}
              ></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/user-details" element={<UserDetails />}></Route>
              <Route path="/user-search" element={<UserSearch />}></Route>
              <Route
                path="/provider-details"
                element={<ProviderDetails />}
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
