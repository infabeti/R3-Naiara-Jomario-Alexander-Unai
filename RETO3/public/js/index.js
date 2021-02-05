
$(document).ready(inicio);
function inicio(){	
	iniciarDialogo();
	
	mapa();
	cargarmenu();

}

function mapa(){
	$(".boton").click(function abrirDialogo(){
		id = $(this).attr("id");
		buscarDatos(id);
		
		$('#mapa').dialog("open");

	});
	
}



function iniciarDialogo(){
	
	$('#mapa').dialog({ 
		height:400,
		width:400,
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


function cargarmenu(){
	$('.botonMenu').click(function (){
		var divSitio=$(this).next().attr("id");
			var url = ('http://localhost:8080/'+divSitio);
			$('#'+divSitio).toggle("slow");
			fetch(url,{
				
			}).then((response) => response.json())
			.then(data =>{
				for(var i=0; i<4; i++){
					$("#"+divSitio+" #primero"+(i+1)).text(data.primeros[i]);
					$("#"+divSitio+" #segundo"+(i+1)).text(data.segundos[i]);
					$("#"+divSitio+" #tercero"+(i+1)).text(data.terceros[i]);
				}
			});
		
	});

}

