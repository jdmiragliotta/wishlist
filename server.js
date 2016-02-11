
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mySql = require('mySql');
var handlebars = require('express-handlebars');


 app.use(bodParser.urlencoded({extended: false}));
 var PORT = process.env.NODE_ENV || 3001;
 app.engine("handlebars", expressHandlebars({defaultLayout: "main"}));
 app.set("view engine", "handlebars");

 var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "wish_list_db"
 });

 qpp.get("/", function(req,res){
  connection.query("SELECT * FROM wish_list", function(err, results){
    if(err){
      var data = {
        wishlist: results
      }
      res.render("main", data)
    }
  })
 })

