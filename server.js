const express = require('express');
const app = express();
const path = require('path');

var users = 0;
var array1 = ['a', 'b' ,'c', 'd'];

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/akg', function (req, res) {
	console.log(req);
	res.end('hello world!');
});


app.get("/mahmud",(req, res) =>{
	++users;
	var number= [];
	var pass="";
	for(var i=0; i< 16 ;i++){
	pass += array1[Math.floor(Math.random()*array1.length)];
	}
	res.end(pass);
});



app.listen(3000, function () {
	console.log('KeyStore server listening on port 3000!');
});