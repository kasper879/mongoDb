var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var { User } = require('./ModelClass/user')
var { mongoose } = require('./Mongo/connection');
var userRoute = require('./db/userDb');

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('', userRoute);


app.listen(port, () => {
  console.log(`Server is running ${port} `);
}); 