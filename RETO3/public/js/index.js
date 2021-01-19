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
}); */
function mensaje(num){
	if (num==1){
		return 'hola, todo en orden'
	}
	else{
		return 'corre cuanto puedas!!'
	}
}
module.exports = {
	mensaje: mensaje
	
};



/* MAPA */

function crearMapa(){
 	console.log("funcion crear mapa");
	console.log("logintud es: ");
	var long = $("#long").val();
	console.log("logintud es: "+longit);
	
	$(this).slideDown( ()=>{
		mapboxgl.accessToken = 'pk.eyJ1Ijoiam9tYXJpb3NhbnRhbmEiLCJhIjoiY2trMmdhY2VkMTEyNDJvbWZvbjNuaTFlOSJ9.YBTLtabWU5_HNz1up7Ouwg';
		var map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [-2.962750, 43.280556],
			zoom: 16
		});
		var marker = new mapboxgl.Marker()
			.setLngLat([-2.962750, 43.280556])
			.addTo(map);

		map.addControl(
			new MapboxGeocoder({
				accessToken: mapboxgl.accessToken,
				mapboxgl: mapboxgl
			})
		);
	});
}

