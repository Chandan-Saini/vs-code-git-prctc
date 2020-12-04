var express = require("express");
var app = express();

var mongoose = require("mongoose")

//this line connect the mongoDB with mongoose, cat_app is the name of the db we want to connect, if that db not present them it will automtically make it for us.
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true })


//this line create a schema for our data we will use later, it contain  which and what type of data we want to add to our db.
var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
})


//this line make a model Cat with schema catSchema, after making the model it creates and returns it after adding all the necessary methods we can use like create(),find(),remove() etc. 
var Cat = mongoose.model("Cat", catSchema) //here we passed two arguments one is (Cat) and this will be our name of the collection inside the db and it automatically get changed into plural by the mongodb menas our original collection name will not be (Cat) it will be (Cats) ,
//and this can be checked using mongodb cmnds in terminal, and second argument is the name of the schema.  


//these lines create  a new cat
// var george = new Cat({           //this cat here is sam eas var Cat in above line
//     name: "mrs norris",
//     age: 7,
//     temprament:"Evil"
// })


//these lines save the new cat in database and shows it as we added a call back fnctn that checks for any error and it will print if any error will come,
//and it saves the cat george and then returns it if it get saved to the db and it will show message and the saved cat.

// george.save(function(err , cat){




// these lines create a new cat and saves it and shows it ,create function helps in making a new cat and also saves it by itself.
// Cat.create({
//   name: "snow white new",
//   age: 2,
//   temperament: "Bland new"
// }, function (err, cat) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(cat)
//   }
// })





// these lines shows all the cats in DB
Cat.find({}, function (err, cats) {
  if (err) {
    console.log("there is some error")
    console.log(err)
  } else {
    console.log("these are all cats")
    console.log(cats)
  }







//after making data in DB , run this file with cmnd  node cats.js
//then see the results
//to perform MongoDb operations on this file just start the mongo server 
//and use commands like show dbs, show collections, db.cats.find()

app.get("/", function (req, res) {
  res.render("landing.ejs");
});

app.get("/home", function (req, res) {
  res.render("home.ejs");
});

app.listen(3000, process.env.IP, function (req, res) {
  console.log("server started.........");
});

})
