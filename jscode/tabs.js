



jQuery(document).ready(function($){
		$('#tabs1 .tab > ul > li').click(function(){
		var clicktab=$(this);
		var IDlistaActual=$('.tab > ul').find('li.activo').find('a').attr("href");
		var IDlistaNueva=clicktab.find('a').attr("href");
		var contenedor=$('#tabs1 .tabs-content');
		var alturaActual=contenedor.height();
		
		
		if (IDlistaActual != IDlistaNueva){
	
		//fijo la altura actual
		contenedor.height(alturaActual);
		$(IDlistaActual).fadeOut(200, function(){
			$(IDlistaNueva).fadeIn(300);
			var nuevaAltura=$(IDlistaNueva).height(); 
			contenedor.animate({height: nuevaAltura});
		});	
		//botones
		$('.tab > ul > li').removeClass('activo');
		clicktab.addClass('activo');
		contenedor.click(function(){
			contenedor.height('auto');
		});
		}		
		return false;
		});
		});
