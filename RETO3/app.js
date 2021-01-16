/* const http = require('http');
const fs = require('fs');
const index = require('./index.js');
const puerto = 4500;

const server = http.createServer(function(peticion, respuesta) {
	respuesta.writeHead(200, { 'Content-Type': 'text/html'});
	
	

	fs.readFile('index.html', function(error, datos){
		if(error) {
			respuesta.writeHead(404);
			respuesta.write('Error al cargar index.js')
		}
		else {
			respuesta.write(datos);
		}
		respuesta.end();
	})
});

server.listen(puerto, function(error){
	if(error) {
		console.log('se ha producido un error');
	}
	else {
		console.log('escuchando en: ' + puerto);
		console.log(index.mensaje(1));
	}
}); */
const express = require('express')
const app = express();
const path = require('path');
const index = require('./public/index.js');
const puerto = 4500;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//index.html'));
});

app.get('/bares', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//bares.html'));
});

app.get('/restaurantes', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//restaurantes.html'));
});

app.get('/cafeterias', (req, res) => {
	res.sendFile(path.join(__dirname + '//public//cafeterias.html'));
});

app.listen(puerto, () => {
  console.log('escuchando en: ' + puerto)
  console.log(index.mensaje(1));
});