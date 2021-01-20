/* MAPA */

$(document).ready(inicio);
function inicio()
{	
	iniciarDialogo();
	}


function abrirdialogo(lat,long){
	$('#mapa').dialog("open");
	var divclicado = $(this).next("div").attr("id");
	console.log(divclicado);
	crearMapa(lat,long);

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






function crearMapa(lat,long){
	 // console.log("funcion crear mapa");
	// for(var i=0; i<3;i++){
		console.log("logintud es: "+long);
		console.log("latitud es: "+lat);

		//$("#mapa").dialog();
		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9tYXJpb3NhbnRhbmEiLCJhIjoiY2trMmdhY2VkMTEyNDJvbWZvbjNuaTFlOSJ9.YBTLtabWU5_HNz1up7Ouwg';
			//  map = map+i;
			var map = new mapboxgl.Map({
			container: 'mapa',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [lat, long],
			zoom: 16
		});
		var marker = new mapboxgl.Marker()
			.setLngLat([lat, long])
			.addTo(map);

		// map.addControl(
		// 	new MapboxGeocoder({
		// 		accessToken: mapboxgl.accessToken,
		// 		mapboxgl: mapboxgl
		// 	})
		// );
	// }
}



/* function botonBares(){

}
function botonCafes(){

}
function botonRestaurantes(){

} */
/* $(document).ready(function(){
	function eleccionSitio(){
		var id = $(this).attr("id");
		var url = ""+id+".html";
		$(this).attr("href", url);
		
/* 		document.getElementById(id).onclick = function () {
        var url = ""+id+".html";
		$(this).attr("href") = url;
		window.location.href(url); 
	}
	
	
/* 	if (id == "bares"){
		location.href = "bares.html";
	}
	else if (id == "cafeterias"){
		location.href = "cafeterias.html";
	}
	else if(id == "restaurantes"){
		location.href = "restaurantes.html";
	} 
}); 
function mensaje(num){
	if (num==1){
		return 'hola, todo en orden'
	}
	else{
		return 'corre cuanto puedas!!'
	}
}
*/

// module.exports = {
// 	mensaje: mensaje
	
// };
