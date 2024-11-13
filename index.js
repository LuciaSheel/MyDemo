const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req,res) => {
  res.send("Hello, world!");
});

app.post("/", (req, res) => {
  res.status(201);
  res.sendStatus("Hello, I am a response to your post request");
})

app.listen(PORT, () => {
  console.log("My server is listening to ${PORT");
});