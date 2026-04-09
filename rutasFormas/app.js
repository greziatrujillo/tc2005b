let log = console.log;

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.setHeader("content-type", "text/html");
        res.write(`URL Index /`);
        res.end();
    }
});

server.listen(3001, () => {
  console.log('Server is listening on port 3001');
});