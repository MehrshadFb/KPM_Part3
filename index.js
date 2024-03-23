require("dotenv").config();
const fs = require("fs");
const express = require("express");
const app = express();
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const PORT = process.env.PORT;

app.get("/login", (req, res) => {
  res.send({ username, password });
});

app.get("/users", (req, res) => {
  fs.readFile("users.json", (err, data) => {
    if (err) {
      res.status(500).send("Cannot read users data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
