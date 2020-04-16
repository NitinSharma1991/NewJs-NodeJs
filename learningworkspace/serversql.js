const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const people_routes = require('./people');

var app = express();
app.use(bodyParser.json());



app.use("/people", people_routes);



app.listen(5000);
