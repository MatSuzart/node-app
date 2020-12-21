module.exports = function(app){
app.get('/produtos',function(req,res){

        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        produtosBanco.lista(function(err,results){
            res.render('produtos/lista',{lista:results});
        });
        connection.end();

});
    
    app.get('/form', function(req,res){
        res.render('produto');
    });

    app.post('/produtos/salvar',function(req,res){

        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.salvar(produto,function(err,results){
            res.render('produtos/lista');
        });
    });
}