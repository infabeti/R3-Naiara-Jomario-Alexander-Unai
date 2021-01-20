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

		nombreSitio = $("h2#"+id+"").text();
		console.log(nombreSitio);
	
    $.getJSON('/datos.json', function getObjects(obj, key, val) {
		var newObj = false; 
		$.each(obj, function(){
			var testObject = this; 
			// alert(testObject);
			$.each(testObject, function(k,v){
				if (v.nombre == nombreSitio){
				console.log(v.nombre + ": " +v.lat + ", " + v.lng);
				
				var latitud = v.lat;
				console.log("Latitud: " +latitud);
				var longitud = v.lng;
				console.log("Longitud: " +longitud);
				/////////////////
				crearMapa(latitud, longitud);
				}
				if(val == v && k == key){
					newObj = testObject;
				}
			});
		});
		return newObj;
		
	});
}