let log = console.log;

const fs = require("fs");
const path = require("path");
const http = require('http');

const server=http.createServer((req, res) => {

    switch(req.url){
        case "/":
            if (req.method == "GET"){
            res.setHeader("content-type", "text/html");
            const html = fs.readFileSync(path.join(__dirname, "./form.html"), "utf-8");
            res.write(html);
            res.end();
            break;

            }}
});


server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});