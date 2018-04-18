const express = require('express');
const app = express();
const path = require('path');

var users = 0;
//var array1 = ['a', 'b' ,'c', 'd', 'e', 'f', 'g' , 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lowChar = "abcdefghijklmnopqrstvwxyz";
var upChar = lowChar.toUpperCase();
var num = "0123456789";
var characters = ".,/?!;'[]{}()*&^%$#@`~<>|";


/*
class Password{

	constructor(length,digits,chars){

		var odds =  "";
		for(var i=0; i<8; i++){odds += '0'};
		for(var i=0; i<8; i++){odds += '1'}; // Can we remevo this recurring code somehow?

		if(digits === "on"){for(var i=0; i<3; i++){odds += '2'}}
	 	if(chars === "on"){for(var i=0; i<1; i++){odds += '3'}}

		var select = Math.floor(Math.random()*odds.length);

		this.pass="";

		for(var i=0; i<length; i++){
			if(odds[select]==='0'){ this.pass + lowChar[Math.floor(Math.random()*lowChar.length)];
			}else if(odds[select]==='1'){ this.pass + upChar[Math.floor(Math.random()*upChar.length)];
			}else if(odds[select]==='2'){ this.pass + num[Math.floor(Math.random()*num.length)];
			}else{ this.pass + characters[Math.floor(Math.random()*characters.length)];}
		}

		for(var i=0; i<length; i++){
			if(odds[select]==='0'){ this.pass.push(lowChar[Math.floor(Math.random()*lowChar.length)]);
			}else if(odds[select]==='1'){ this.pass.push(upChar[Math.floor(Math.random()*upChar.length)]);
			}else if(odds[select]==='2'){ this.pass.push(num[Math.floor(Math.random()*num.length)]);
			}else{ this.pass.push(characters[Math.floor(Math.random()*characters.length)]);}
		}
	}

}; 
*/


 var randPass = function (digits,chars){

 	var odds =  "";
	for(var i=0; i<8; i++){odds += '0'};
	for(var i=0; i<8; i++){odds += '1'}; // Can we remevo this recurring code somehow?


 	if(digits === "on"){for(var i=0; i<3; i++){odds += '2'}}
 	if(chars === "on"){for(var i=0; i<1; i++){odds += '3'}}

	var select = Math.floor(Math.random()*odds.length);

	if(odds[select]==='0'){return lowChar[Math.floor(Math.random()*lowChar.length)];
	}else if(odds[select]==='1'){return upChar[Math.floor(Math.random()*upChar.length)];
	}else if(odds[select]==='2'){return num[Math.floor(Math.random()*num.length)];
	}else{ return characters[Math.floor(Math.random()*characters.length)];}
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
	var pass="";
	for(var i=0; i< 16 ;i++){
	pass += randPass(true,true);
	}
	res.end(pass); 
});

app.get("/api/password", (req,res)=>{
	
	++users;

	var length = req.query.length;
	var digits = req.query.digits;
	var chars = req.query.chars;
	var pass="";
	for(var i=0; i<length; i++){ pass += randPass(digits,chars);}

	//const new_password = new Password(length,chars,digits);

	res.type('text');
	res.end(pass);

});



app.listen(3000, function () {
	console.log('KeyStore server listening on port 3000!');
});