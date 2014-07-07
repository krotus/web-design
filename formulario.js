/*javascript amb jQuery*/

//declaració de variables jquery
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

//funció per mostrar el formulari
function mostrarFormulario(){
	$form.slideToggle();//efecte corrader alhora de mostrar form
	return false; //perquè no recargui la pagina de nou
}

//funció per afegir un nou post o article al fer ús del formulari
function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();//funcio clone per clonar el .item first

	$clone.find('.titulo_item a')//busquem dintre de post la clase titulo_item a 
		.text(titulo)//afegim text al titul
		.attr('href', url);//afegim un atribut href a la etiqueta que la clase amb valor url

	$clone.hide();//amagem el clone pq no es mostri

	$list.prepend($clone);//prepend significa al principi, es a dir s'afageix al principi del article

	$clone.fadeIn();//efecte que es realitza al clone

	return false;
}

// Eventos:
//com el clic alhora de fer clic a l'etiqueta publicar
$button.click( mostrarFormulario );
//alhora de fer submit amb on afegim el post cridant la funció agregarPost
$form.on('submit', agregarPost );