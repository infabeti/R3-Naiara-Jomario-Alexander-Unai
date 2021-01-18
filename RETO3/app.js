const express = require('express')
const app = express();
const path = require('path');
const index = require('./public/index.js');
const puerto = 3000;

app.use(express.static('public',{extensions:['html']}));

//Rutas
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '//public//index.html'));
// });

// app.get('/bares', (req, res) => {
//   res.sendFile(path.join(__dirname + '//public//bares.html'));
// });

// app.get('/cafeterias', (req, res) => {
// 	res.sendFile(path.join(__dirname + '//public//cafeterias.html'));
// });

// app.get('/restaurantes', (req, res) => {
//   res.sendFile(path.join(__dirname + '//public//restaurantes.html'));
// });

app.listen(puerto, () => {
  console.log('escuchando en: ' + puerto)
  console.log('¡Todo en orden!');
});