let log = console.log;

const fs = require("fs");
const path = require("path");
const http = require('http');

const server=http.createServer((req, res) => {

    log(req.url);
    const filePath = path.join(__dirname,"bootstrap-card.html");

    fs.readFile(filePath, (err, content) => {

        res.writeHead(200, {"content-type": "text/html"});
        res.end(content);
    });
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});