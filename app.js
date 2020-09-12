const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/mipagina.html");
});

app.get("/muestra-imagen", (req, res) => {
  res.sendFile(__dirname + "/js-logo.png");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(process.env.PORT || 3000);
