const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');

app.get("/", function (req, res) {
  res.send("¡Hola mundo!");
});

app.get('/characters', (req, res) => {
    const filePath = path.join(__dirname, '/data/characters.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo JSON');
        }
  
        // Parsea el JSON y lo envía como respuesta
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.get('/characters/:id', (req, res) => {
    const filePath = path.join(__dirname, '/data/characters.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error al leer el archivo JSON');
        }
  
        // Parsea el JSON y lo envía como respuesta
        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});