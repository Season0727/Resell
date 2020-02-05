var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get('/', function(req, res){
	res.render("home");
});






var port = 3000;
app.listen(port, function(){
	console.log(`The server is running on port: ${port}`);
});