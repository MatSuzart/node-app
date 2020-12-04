module.exports = function(app){

app.get('/produtos',function(req,res){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host :'localhost',
        user : 'root',
        password : '',
        database : ''
    });
    connection.query('select * from list',function(err,results){
        res.render('produtos/lista',{lista:results});
    });
    connection.end();

});

}