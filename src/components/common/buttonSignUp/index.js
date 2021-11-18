import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default () => (
  <div>
    <Button>
      <Link to="/sign-up">Sign Up</Link>
    </Button>
  </div>
);
