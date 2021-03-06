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

app.get("/myname", (req, res) => {
  res.send("<h1>Rodri.</h1>");
});

app.listen(process.env.PORT || 3000);
