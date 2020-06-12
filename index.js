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


function multiplier( multiply) {
  var mulfun = function (x) {
    return multiply*x;
  }

  return mulfun
}

var mul10 = multiplier(10)
console.log(mul10(10))

function opr(y, oprunder) {
  return oprunder(y)
}

console.log(opr(5,mul10))