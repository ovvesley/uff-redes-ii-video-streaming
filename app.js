const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/streaming-low", (req, res) => {
  res.send("/streaming-low");
});

app.get("/streaming-medium", (req, res) => {
  res.send("/streaming-medium");
});

app.get("/streaming-high", (req, res) => {
  res.send("/streaming-high");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
