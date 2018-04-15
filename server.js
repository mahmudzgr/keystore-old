const express = require('express');
const app = express();
const path = require('path');

var users = 0;
//var array1 = ['a', 'b' ,'c', 'd', 'e', 'f', 'g' , 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowChar = "abcdefghijklmnopqrstvwxyz";
var upChar = lowChar.toUpperCase();
var num = "0123456789";
var characters = ".,/?!;'[]{}()*&^%$#@`~<>|";

 var randPass = function (){
	var select = Math.floor(Math.random()*20);
	if(select>=0 && select<7){
		return lowChar[Math.floor(Math.random()*lowChar.length)];
	}else if(select>=7 && select<14){
		return upChar[Math.floor(Math.random()*upChar.length)];
	}else if(select>=14 && select <18){
		return num[Math.floor(Math.random()*num.length)];
	}else{
		return characters[Math.floor(Math.random()*characters.length)];
	}
};


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
	pass += randPass();
	}
	res.end(pass);
});



app.listen(3000, function () {
	console.log('KeyStore server listening on port 3000!');
});