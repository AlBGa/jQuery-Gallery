$('nav a').on('click', function(e) {
	e.preventDefault();
	//Current class assignment
	$('nav li').removeClass('current');
	$(this).parent().addClass('current');

	//Set heading text
	$('#heading').text($(this).text());

	//Get & filter link text
	var category = $(this).text().toLowerCase().replace(' ', '-');

	//Remove hidden class if 'all-projects' is selected
	if(category == 'all-projects') {
		$('ul#gallery li.hidden').fadeIn('slow').removeClass('hidden');
	} else {
		$('ul#gallery li').each(function() {
			if(!$(this).hasClass(category)) {
				$(this).hide().addClass('hidden');
			} else {
				$(this).fadeIn('slow').removeClass('hidden');
			}
		});
	}

	//Stop Link Behavior
});

$('ul#gallery li').on('mouseover', function() {
	var title = $(this).children().data('title');
	var desc = $(this).children().data('desc');

	if(desc == null) {
		desc = 'Click to Enlarge';
	}

	if(title == null) {
		title = '';
	}
	
	if ($(this).find('div.overlay').length == 0) {
		$(this).append('<div class="overlay"></div>');
	}
	var overlay = $(this).children('.overlay');
	overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');
	overlay.fadeIn(800);

});

$('ul#gallery li').on('mouseleave', function() {
	var overlay = $(this).children('.overlay');
	overlay.fadeOut(100);
});