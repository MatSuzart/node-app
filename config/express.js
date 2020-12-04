module.exports = function(){
    var app = require('express')();
    app.set('view engine', 'ejs');
    app.set('view','./app/views');
    return app;
}