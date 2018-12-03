$(document).ready(function() {
	//1
	//li style
	$('li').mouseover(function() {
  		 $(this).css('background-color', 'green');
	});

	//eliminar parrafo
	$('#parrafo').click(function(){
		$(this).remove();
	});

	//denegar acceso al link
	$('a').click(function(e){
		e.preventDefault();
		alert('Acceso Denegado');
	});
	//borrar div y aparece borrado
	$('div').click(function() {
		$(this).html('<p>Borrado</p>');
	});

	// 2
	$('input').focus(function(){
		$(this).css('border-color', 'red');
	});

	$('input').blur(function(){
		$(this).css('border-color', '');
	});

	$('#formulario p').each(function(){
		var self = $(this);
		self.click(function(){
			$(this).css('background-color', 'blue');
		});
	});
	

	
});