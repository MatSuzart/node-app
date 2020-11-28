var express = require('express');
var app = express();

app.get('/home',function(req,res){
    res.send("<html><body><h1>Hello World</h1></body></html>");
});

app.listen(3000,function(){
    console.log("running")
});