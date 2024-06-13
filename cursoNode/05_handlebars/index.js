const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// configuração

    // template engine
    app.engine('handlebars',handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')

    // conexao com o banco de dados
    const sequelize = new Sequelize('test','root','',{
        host: 'localhost',
        dialect: 'mysql'
    })


// rotas
app.get('/cadastro', function(req,res){
    // res.send('ROTA DE CADASTRO DE POSTS DO SHOW')
    res.render('formulario')
})


app.post('/add',function(req,res){
    res.send('FORMULÁRIO ENVIADO! ESSA FOI SHOW.')
})

app.listen(8081, function(){
    console.log('Servidor rodando em http://localhost:8081')
})