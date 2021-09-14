const express = require('express');
const app = express();
//><
app.get('/results/:n1/:n2', (req, res)=>{
    var n1 = Number(req.params.n1);
    var n2 = Number(req.params.n2);
    var suma = n1+n2;
    res.send(suma.toString());
});

app.post('/results', (req, res)=>{
    var n1 = Number(req.query.n1);
    var n2 = Number(req.query.n2);
    var multiplicacion = n1*n2;
    res.send(multiplicacion.toString());
});

app.put('/results', (req, res)=>{
    var n1 = Number(req.query.n1);
    var n2 = Number(req.query.n2);
    var division = n1/n2;
    res.send(division.toString());
});

app.patch('/results', (req, res)=>{
    var n1 = Number(req.query.n1);
    var n2 = Number(req.query.n2);
    var potencia = 1;
    for(let i=0; i<n2; i++)
        potencia=potencia*n1;
    res.send(potencia.toString());
});

app.delete('/results/:n1/:n2', (req, res)=>{
    var n1 = Number(req.params.n1);
    var n2 = Number(req.params.n2);
    var resta = n1-n2;
    res.send(resta.toString());
});

app.listen(4444, ()=>{
    console.log("App up and running");
});