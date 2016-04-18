var express = require('express');
var app = express();



//server push the controll to index.html
app.use(express.static(__dirname + "/public"))



app.listen(8080);
console.log("Server running on port 8080");






