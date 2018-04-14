const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var friends = [
    {
      name: "Melissa",
      picture: "9198675309",
      scores: [],
    },
    {
      name: "Melissa",
      picture: "9198675309",
      scores: []
    },
    {
      name: "Melissa",
      picture: "9198675309",
      scores: []
    }
  ];

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
res.sendFile(path.join(__dirname, "survey.html"));
  });

