var http = require('http');
var n = require('./primeironode');
var dia = require('./moduloDate')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Contet-type': 'text/html' });
    res.write('<h1>aula 1<br></h1>');
    res.write(n.nome() + '<br>');
    //res.write(Date());
    res.write(dia.diaDaSemana() + '<br>');
    res.end('<br>Seja bem vindo!');
}).listen(8080);