const express = require('express')
//instanciar uma variavel
//const pq n pode mudar dp
const app = express()

// '/' rota principal, cria funcao de call back
app.get('/',function(req, res){
    res.sendFile(__dirname + '/paginas/index.html')
})

//criou outras rotas
app.get('/blog',function(req, res){
    res.send('PÁGINA BLOG SHOW')
})

app.get('/sobre',function(req, res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})

app.get("/ola/:cargo/:nome",function(req, res){
    res.send('Olá ' + req.params.cargo + '\n seu nome show é ' + req.params.nome)
})

//rotas dinamicas, recebem parametros 
app.get('/cadastro/:nome/:curso',function(req, res){
    res.send('CADASTRO CONTATOS DO ANDERSHOW: ' + req.params.nome + '\nO CURSO SHOW DO SER: ' + req.params.curso)//pegando o valor do campo nome
})

//cria o servidor e vai ficar de olho na porta
app.listen(8081, function(){ //no listen n passa req e res
    console.log('Servidor rodando em http://localhost:8081')
}) //tem q ser o ultimo pq prmeio ele le