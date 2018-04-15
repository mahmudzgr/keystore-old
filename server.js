const express = require('express');
const app = express();
const path = require('path');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/akg', function (req, res) {
	console.log(req);
	res.end('hello world!');
});

app.listen(3000, function () {
	console.log('KeyStore server listening on port 3000!');
});