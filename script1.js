var sentence='Hello! Welcome to the coding page';
var mylog=console.log(
    sentence.toUpperCase()
);
var express = require('express')
var app = express()

app.get('/', function (req, res)  {
    console.log(mylog)
})


app.listen(3000)