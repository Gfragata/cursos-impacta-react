const http = require('http');

const requisicao = function(request, response){
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write("<h1>Texto a ser exibido no browser</h1>");
    response.end();
}

const server = http.createServer(requisicao);

const servidorNoAr = function(){
    console.log("Servidor no ar na porta 3000");
}

server.listen(3000, servidorNoAr);