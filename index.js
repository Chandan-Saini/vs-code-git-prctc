// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//   res.render("landing.ejs");
// });

// app.get("/home", function (req, res) {
//   res.render("home.ejs");
// });

// app.listen(3000, process.env.IP, function (req, res) {
//   console.log("server started.........");
// });

var company = new Object();
company.name = "vaah dot com";

company.ceo = {};
company.ceo.name="chandan"
company.$stock="100"
company["price of stock"]= 200
console.log(company["price of stock"]);
