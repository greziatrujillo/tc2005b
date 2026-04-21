const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/health", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ status: "ok" }));
    res.end();
});

app.get("/preguntas", (req, res, next) => {
    res.render("preguntas"); 
});

const rutasUsuarios = require('./routes/usuarios.routes');
app.use('/usuarios', rutasUsuarios);

app.listen(3001);