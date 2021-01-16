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
