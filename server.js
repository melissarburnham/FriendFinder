const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './app/public')));

const api = require('./app/routing/apiRoutes.js'); 
api(app);
const html = require('./app/routing/htmlRoutes.js');
html(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


