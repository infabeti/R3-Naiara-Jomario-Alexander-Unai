const express = require('express');
const app = express();
const path = require('path');
const puerto = 3000;

app.use(express.static(path.join(__dirname, "public"),{extensions:['html']}));

// Ruta y Error Index
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//index.html'),function(error){
    if(error){
      res.status(404).send('<h1>error 404: Archivo "index.html" no encontrado.</h1>');
    }
  });
});
// Ruta y Error bares
app.get('/bares', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//bares.html'),function(error){
    if(error){
      res.status(404).send('<h1>error 404: Archivo "bares.html" no encontrado."</h1>');
    }

  });
  
});
// Ruta y Error restaurantes
app.get('/restaurantes', (req, res) => {
	  res.sendFile(path.join(__dirname + '//public//restaurantes.html'),function(error){
	    if(error){
	      res.status(404).send('<h1>error 404: Archivo "restaurantes.html" no encontrado."</h1>');
	    }

	  });
  
});

//Ruta y Error cafeterias
app.get('/cafeterias', (req, res) => {
  res.sendFile(path.join(__dirname + '//public//cafeterias.html'),function(error){
    if(error){
      res.status(404).send('<h1>error 404: Archivo "cafeterias.html" no encontrado."</h1>');
    }

  });
  
});

  
app.listen(puerto, function(error){
  if(error){
    console.log('Se ha producido un error al iniciar el servidor');
  }else{
    console.log('Escuchando en: ' + puerto+" \n¡Todo en orden! ");
  }
});