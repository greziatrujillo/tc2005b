const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send("Hello World!");
    res.end();
});

app.listen(3001);