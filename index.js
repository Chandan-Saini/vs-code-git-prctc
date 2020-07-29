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

var arr = new Array();

arr[0] = "10";
arr[1] = 20;
arr[2] = function fun(arg) {
  var a = "hello";
  return a + arg;
};
arr[3] = { name: "chandan", class: "8th" };

for (var i in arr) {
  console.log(arr[3].name);
}

console.log("file changed for prctc");
console.log("file changed for prctc of github cloning");