$(document).ready(function() {
	// Ejercicio 1
	//li style
	$("li").mouseover(function() {
  		 $(this).css("background-color", "green");
	});

	//eliminar parrafo
	$("#parrafo").click(function(){
		$(this).remove();
	});

	//denegar acceso al link
	$('a').click(function(e){
		e.preventDefault();
		alert("Acceso Denegado");
	});
	//borrar div y aparece borrado
	$("#elementodiv").click(function() {
		$(this).html("<p>Borrado</p>");
	});

	// Ejercicio 2
	$("input").focus(function(){
		$(this).css("border-color", "red");
	});

	$("input").blur(function(){
		$(this).css("border-color", "");
	});

	$("#formulario p").each(function(){
		var self = $(this);
		self.click(function(){
			$(this).css("background-color", "blue");
		});
	});
	


//Ejercicio 3

//deshabilitar para imagen
$(".imagen").mousedown(function(e){
      if(e.which == 3){
        alert("Click derecho deshabilitado.");
      }
  });

//Deshabilitar para texto
$.fn.extend({ 
    disableSelection: function() { 
        this.each(function() { 
            if (typeof this.onselectstart != "undefined") {
                    this.onselectstart = function() {
                    	alert("Seleccion de texto deshabilitado");	
                     	return false; 

            		};
            }else if (typeof this.style.MozUserSelect != "undefined") {
                     this.style.MozUserSelect = "none";
           } else {
                    this.onmousedown = function() {
                    	return false; 
                    };
                  }
                    }); 
                } 
            });
 
          
                
$(".texto").disableSelection();

// Ejercicio 4
$(document).ready(function(){
	$(".rojo").mouseenter(function(){
    		$("p", this).text("Estas sobre el cuadro rojo y viene desde arriba");
  	});
  	$(".rojo").mouseleave(function(){
    		$("p", this).text("");
 	});
  	$(".verde").mouseenter(function(){
    		$("p", this).text("Estas sobre el cuadro verde y viene desde abajo");
  	});
  	$(".verde").mouseleave(function(){
    		$("p", this).text("");
 	});
  	$(".azul").mouseenter(function(){
    		$("p", this).text("Estas sobre el cuadro azul y viene desde abajo");
  	});
  	$(".azul").mouseleave(function(){
    		$("p", this).text("");
 	});
  	$(".naranjo").mouseenter(function(){
    		$("p", this).text("Estas sobre el cuadro naranjo y viene desde arriba");
  	});
  	$(".naranjo").mouseleave(function(){
    		$("p", this).text("");
 	});

});
// Ejercicio 5
//Al hacer onclick, no lo hacia del todo bien.
$("#form5").on("change", function(){
  var plato1 = $("input:radio[name=primero]:checked", "#form5").val();
  var plato2 = $("input:radio[name=segundo]:checked", "#form5").val();
  var postre = $("input:radio[name=postre]:checked", "#form5").val();

  var cafe = $("input:checkbox[name=cafe]:checked", "#form5").val();

  if(!cafe){
    cafe = "no";
  }else{
    cafe = "si";
  };

  $("#menu").val("El menu que has seleccionado es: Primer Plato => " +plato1+" | Segundo Plato: => " +plato2+" | Postre: => " + postre+ " | Cafe: => " +cafe );
});

// Ejercicio 6
 $("#btnContarVocales").on("click", function(){   
    /*
    Se obtiene el texto ingresado, se le quitan los espacios en blanco,
    se convierte a minusculas y se encapsula en la variable 'parrafo'.             
   */
    var parrafo= ($("#texto").val()).replace(/ /gi, '').toLowerCase();
             
    /*
     Se crea el arreglo 'vocales' con los caracteres que vamos a contabilizar.
     */
     var vocales = [ "a", "e", "i", "o", "u"];
                 
                /*
                Se crean e inicializan variables para encapsular el conteo de cada una 
                de las vocales.
                */
    var contadorA= 0;
    var contadorE= 0;
    var contadorI= 0;
    var contadorO= 0;
    var contadorU= 0;              
 
    /*
    Se recorre el texto encapsulado en la variable 'parrafo' y de acuerdo al
    caracter recorrido se va aumentando el contador relacionado con cada una 
    de las vocales segun corresponda.
    */
   for(var i=0; i < parrafo.length; i++){
       switch(parrafo[i]){
            case "a":{
               contadorA++;
               break;                          
             };
             case "e":{
               contadorE++;
               break;                          
             };
              case "i":{
                contadorI++;
                break;                          
              };
               case "o":{
                contadorO++;
                break;                          
              };
                case "u":{
                 contadorU++;
                 break;                          
              };                       
                    };                   
                };

       var resultado= parseInt(contadorA)+parseInt(contadorE)+parseInt(contadorI)+parseInt(contadorO)+parseInt(contadorU);
                 
                /*
                Se despliega en pantalla el resultado encapsulado en la variable 'resultado'
                */
        if (resultado%2==0){
            $("body").css("background-color", "#99ccff");
        }else{
            $("body").css("background-color", "#ff6600");
        }
                

        alert(resultado);



	});     




	
});