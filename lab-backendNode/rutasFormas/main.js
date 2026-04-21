const http = require("http");

const server = http.createServer((req, res) => {
    switch(req.url){
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.write("<h1>This is the main page!</h1>");
            res.write("<p> There is not much to see here, but you can navigate to the form to test the functionality of this application :) </p>");
            res.end();
            break;

        case "/about":
            if(req.method == "GET"){
                res.setHeader("Content-Type", "application/json");
                res.write('This application is to be able to set the foundations of routing using node js. Within one program file, there will be different routes.');
                res.end();
            }else if(req.method == "POST"){
                res.setHeader("Content-Type", "application/json");
                res.write('{code: 200, msg:"Ok POST"}');
                res.end();
            }    
            break;        

        case "/form":
            if(req.method == "GET"){
                const path = require("path");
                const fs = require("fs");

                res.setHeader('Content-Type', 'text/html');
                const html = fs.readFileSync(path.resolve(__dirname, "./formTest.html"), "utf-8");
                res.write(html);
                res.end();
                
                //upon post, the form data is moved to txt
            }else if(req.method == "POST"){
                let body = [];
                req
                .on('data', chunk => {
                    body.push(chunk);
                })
                .on('end', () => {
                    body = Buffer.concat(body).toString();
                    console.log(body)

                    const nombre = body.split('&')[0].split('=')[1];
                    console.log(nombre);

                    const color = body.split('&')[1].split('=')[1];
                    console.log(color);

                    const data = {
                        nombre: nombre,
                        color: color
                    };

                    const fs = require('fs');
                    const path = require('path');

                    const filePath = path.join(__dirname, 'formData.txt');

                    fs.appendFile(filePath, JSON.stringify(data) + '\n', (err) => {
                        if (err) {
                            console.error('Error writing to file:', err);
                            res.statusCode = 500;
                            res.write('{code:500, msg:"Internal Server Error"}');
                        }
                        else {
                            console.log('Data written to file successfully');
                            res.setHeader('Content-Type', 'application/json');
                            res.statusCode = 200;
                            res.write('{code:200, msg:"Ok POST"}');
                        }
                        //move the success msg and end inside callback to assure message AFTER txt is written
                        res.end();
                    }); 

                });  
            }
            break;

        default:
            res.statusCode = 404;
            res.write('Nothing to see here :c');
            res.end();
            break;
    }
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
