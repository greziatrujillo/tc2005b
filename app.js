let log = console.log;

const http = require('http');
const server=http.createServer((req, res) => {
    log(req.url);
    res.setHeader("content-type", "text/html");
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>HTML</title>
        </head>
        <body>
        <h1>:3</h1>
        </body>
        </html>
    `);
    res.end();
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});