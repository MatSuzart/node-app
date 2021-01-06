module.exports = function(app){
        var listaProdutos = function(req,res){
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        produtosBanco.lista(function(err,results){
            res.render('produtos/lista',{lista:results});
        });
        connection.end();

};
    app.get('/produtos',listaProdutos);

    app.get('produtos/form', function(req,res){
        app.render('produtos/form');
    });

    app.post('/produtos',function(req,res){

        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salvar(produto,function(err,results){
            listaProdutos(req,res);    
            res.redirect('/produtos');
        });
    });
}