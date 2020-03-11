require("dotenv").config();
var express = require("express");
var app = express();
var router = require("./router");
var { testConnection } = require("./config/database");
var formidable = require("express-formidable");
<<<<<<< HEAD
var cors = require('cors')
=======
var cors = require("cors");

>>>>>>> f5ee4b2c0a023dc50cd861e280b3e1e05b8fbe26
testConnection();
app.use(cors());
app.use(formidable());
app.use(cors());
app.use(router);

module.exports = app;
