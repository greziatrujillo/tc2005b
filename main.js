let log = console.log;

const fs = require("fs");
const path = require("path");

const http = require('http');
const server=http.createServer((req, res) => {

    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end("Error loading index.html");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});