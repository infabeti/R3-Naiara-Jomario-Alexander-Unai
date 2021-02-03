/* MAPA */

$(document).ready(inicio);
function inicio(){	
	iniciarDialogo();
	
	mapa();
/* MOSTRAR MENÚ */
$('.botonMenu').click(function (){
var divSitio=$(this).next().attr("id");
	alert(divSitio);
	 var url = ('http://localhost:8080/'+divSitio);
	 console.log(url);
	$('#'+divSitio).toggle("slow");
	fetch(url,{
		
	}).then((response) => response.json())
	.then(data =>{
		for(var i=0; i<4; i++){
			// console.log("aqui");
			   $("#"+divSitio+" #primero"+(i+1)).text(data.primeros[i]);
			   $("#"+divSitio+" #segundo"+(i+1)).text(data.segundos[i]);
			   $("#"+divSitio+" #tercero"+(i+1)).text(data.terceros[i]);
		}
	});

});
/******************************/
}
function mapa(){
	$(".boton").click(function abrirDialogo(){
		buscarIds();
		id = $(this).attr("id");
		buscarDatos(id);
		
		$('#mapa').dialog("open");

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

		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9tYXJpb3NhbnRhbmEiLCJhIjoiY2trMmdhY2VkMTEyNDJvbWZvbjNuaTFlOSJ9.YBTLtabWU5_HNz1up7Ouwg';

			var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lat, lng],
			zoom: 16
		});
		var marker = new mapboxgl.Marker()
			.setLngLat([lat, lng])
			.addTo(map);

}

	

function buscarDatos(id){
		
	nombreSitio = $("h2#"+id+"").text();
	$('#mapa').dialog({title:nombreSitio});
    $.getJSON('/datos.json', function getObjects(obj, key, val) {
		var newObj = false; 
		$.each(obj, function(){
			var testObject = this; 

			$.each(testObject, function(k,v){
				if (v.nombre == nombreSitio){

					var latitud = v.lat; 

					var longitud = v.lng;

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

function buscarIds(){
		var numItems = $('.nombreBar').length;
		var min = numItems;
		var max = 0;
		
		 for (var i = 0; i < numItems; i++) {
			actualId = $('.nombreBar').eq(i).attr("id");
			
            if (actualId < min) {
				min = actualId;
            }
			else if (actualId > max) {
				max = actualId;
            }
        }
}
// module.exports = {
// 	buscarDatos: buscarDatos
// };


