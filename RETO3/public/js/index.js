/* MAPA */

$(document).ready(inicio);
function inicio(){	
	iniciarDialogo();
	
	mapa();
 
/////////////////////////////////
}
function mapa(){
	$(".btn").click(function abrirDialogo(){
		id = $(this).attr("id");
		buscarDatos(id);
		
		$('#mapa').dialog("open");
		var divclicado = $(this).next("div").attr("id");
		console.log(divclicado);
		
		

});
	
}



function iniciarDialogo(){
	
	$('#mapa').dialog({ 
		height:300,
		width:300,
		modal:true,
		autoOpen:false,
		buttons:{
			"Cerrar":function(){
				$(this).dialog("close");
			}
		},
		
	});
}






function crearMapa(lat, lng){
	 // console.log("funcion crear mapa");
	// for(var i=0; i<3;i++){
		console.log("longitud es: "+lng);
		console.log("latitud es: "+lat);

		//$("#mapa").dialog();
		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9tYXJpb3NhbnRhbmEiLCJhIjoiY2trMmdhY2VkMTEyNDJvbWZvbjNuaTFlOSJ9.YBTLtabWU5_HNz1up7Ouwg';
			//  map = map+i;
			var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lat, lng],
			zoom: 16
		});
		var marker = new mapboxgl.Marker()
			.setLngLat([lat, lng])
			.addTo(map);

		// map.addControl(
		// 	new MapboxGeocoder({
		// 		accessToken: mapboxgl.accessToken,
		// 		mapboxgl: mapboxgl
		// 	})
		// );
	// }
}

	

function buscarDatos(id){
		//primero coge de la función 'mapa' el 'id' del botón clickado digamos que fue el primer botón, así que id = 1
		nombreSitio = $("h2#"+id+"").text(); //con ese 'id' coge el texto ("Restaurante GOIKAR") del 'h2' que tenga ese mismo 'id'. 
		console.log(nombreSitio);
	
    $.getJSON('/datos.json', function getObjects(obj, key, val) { //aquí recoge los datos del json
		var newObj = false; 
		$.each(obj, function(){ //empieza buscando por cada obj (bares/restaurantes/cafeterias)
			var testObject = this; 
			// alert(testObject);
			$.each(testObject, function(k,v){ //aquí busca por cada obj, es decir, se meterá en cada uno de ellos, ordenando los v(values), por k (key, ej: el primer key será 0, el segundo será 1, etc.), aunque esto no nos sirve de mucho por que vamos a querer buscar según el texto guardado en 'nombreSitio'.
				if (v.nombre == nombreSitio){	//va comparando el value que queremos encontrar (v.nombre) con el que ya tenemos ('nombreSitio'), en caso de ser igual, cumplirá la condición y pasaremos a recoger las coordenadas de ese objeto.
					console.log(v.nombre + ": " +v.lat + ", " + v.lng);//Nos aseguramos tanto de que el nombre como las coordenadas sean las que queremos.
					
					//console.log(v); //=> resultado: Object { nombre: "Restaurante GOIKAR", direccion: "Agirre Lehendakariaren Etorb., 186", CP: "48015", ciudad: "Bilbo", provincia: "Bizkaia", telefono: "685 75 12 61", lng: "43.2837082", lat: "-2.9660887" }
					/*v en este caso sería el objeto completo, por eso tenemos que poner 'v.ElValorQueQueramosDeEseObjeto'*/
					
					var latitud = v.lat; //Recogemos la latitud
					console.log("Latitud: " +latitud);
					var longitud = v.lng; //y la longitud
					console.log("Longitud: " +longitud);
				/////////////////
				crearMapa(latitud, longitud); //e iniciamos la función 'crearMapa' con esos dos valores.
				}
				if(val == v && k == key){
					newObj = testObject;
				}
			});
		});
		return newObj;
		
	});
}