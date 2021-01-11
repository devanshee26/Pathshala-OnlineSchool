var http = require('http');
var port = process.env.port || 8080;
var express = require('express');
var app = express();
var appRoutes = require('./routes/app-routes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/pathshala',{ useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);


console.log('Hello from Backend port : ', port);