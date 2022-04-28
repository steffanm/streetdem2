const express = require("express"); //Line 1
const mongoose = require(`mongoose`);
const morgan = require(`morgan`);
const path = require(`path`);
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
//http request logger
app.use(morgan(`tiny`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// This displays message that the server running and listening to specified port

// create a GET route
app.get(`/express_backend`, (req, res) => {
  //Line 9
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
  //Line 10
}); //Line 11

app.get("/cors", (req, res) => {
  res.send("This has CORS enabled 🎈");
});

app.get(`/api`, (req, res) => {
  const data = {
    username: `test`,
    age: 12,
  };
  res.json(data);
});

// post request

app.post("/signUp", (req, res) => {
  res.json({ foo: req.body });
});

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
// get cores headers on react app payload
// get confirmed options request in browser request log
// get express cors middleware working (wild card is okay)
// confirm YOUR EXPRESS BACKEND IS CONNECTED TO REACT is visiable in browser
