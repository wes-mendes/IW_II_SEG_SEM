//solicitar um modulo interno do node chamado http
var http = require('http')

//abrindo um servidor http
http.createServer(function(req,res){
    res.end("O dia que um dos drake perder pra spin, vai virar mochilinha pra dar uma refletida")
    res.end("Pra prender os bode só se for parado, ou no desacerto acabar a gasolina")
}).listen(8081)

console.log('Servidor Online')
