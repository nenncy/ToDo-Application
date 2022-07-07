const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose= require('mongoose');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api',require('./Routes/Todo.route'));
app.use('/api',require('./Controllers/Todaytasklist'))

//mongo connection 

mongoose.connect("mongodb+srv://nency:nency@cluster0.sngnrkt.mongodb.net/ToDo",{ useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});