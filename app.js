let log = console.log;

//creando un servidor
const http = require("http");
const server = http.createServer((request, response) =>{ 
    log("request received");
});

server.listen(3000);