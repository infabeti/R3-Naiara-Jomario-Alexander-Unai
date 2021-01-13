const http = require('http');
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
});