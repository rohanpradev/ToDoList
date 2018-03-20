var express = require('express');
var toDoController = require('./controllers/todocontroller.js');
// var mongoose = require('mongoose');
var app = express();

// // connect to the database
// mongoose.connect('mongodb://test:test@ds012678.mlab.com:12678/todo');
//
// // create a schema- this is like a blueprint
// var toDoSchema = new mongoose.Schema({
//   item: String
// });
//
// // telling mongodb that collection todo having data of schema toDoSchema
// var toDo = mongoose.model('ToDo', toDoSchema);

// // adding items manually to mongodb
// var itemOne = toDo({
//   item: 'buy bread'
// }).save((err) => {
//   if (err) throw err;
//   console.log('item saved');
// });
//
// var itemTwo=toDo({item: 'second item'}).save((err) =>{
//   if(err) throw err;
//   console.log('item two saved');
// });

// setting up template
app.set('view engine', 'ejs');

// setting up static files
app.use(express.static('./public'));

//fire controller
toDoController(app);

// listen to port
app.listen(3000);
console.log('You are listening to port 3000');
