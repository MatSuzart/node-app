var app = require('./config/express')();

var route = require('./app/routes')(app);

app.listen(3000,function(){
    console.log("running")
});