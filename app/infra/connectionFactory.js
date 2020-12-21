var mysql = require('mysql');

var connectMYSQL = function(){
    return mysql.createDBConnection({
        host:'',
        user:'',
        password: '',
        database: '',
    });
}

module.exports = function(){
    return connectMYSQL;
}