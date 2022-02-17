import express from 'express';
var app = express();

app.post('/', function (req, res) {
        res.send('Olá, mundo.');
    });

app.listen(3000, function () {
        console.log('Porta 3000');

    });
