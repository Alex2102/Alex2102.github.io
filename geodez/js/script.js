// описал header при max-width 1090px

$('.div').on('click', function() {
	//e.preventDefault;
	$('.header-icon').toggleClass('header-icon-active');
	$('.header-contacts').toggleClass('header-contacts-active');
	$('.header-logo').toggleClass('header-logo-active');
});


//поведение кнопки меню на мобильных устройствах

$('.header-nav-button').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('header-nav-button-active');
	$('.header-nav').toggleClass('header-nav-active');
});
