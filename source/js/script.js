var popupMenuBurger = document.querySelector(".page-header__burger");
var popupMenu = document.querySelector(".page-header__main-nav");
var popupCloseMenu = document.querySelector(".main-nav__close");


//Вызов меню в мобильной версии

popupMenuBurger.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMenu.classList.add("popup-show");

	popupMenu.classList.add("popup-open");

});

popupCloseMenu.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMenu.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (popupMenu.classList.contains("popup-show")) {
			evt.preventDefault();
			popupMenu.classList.remove("popup-show");
		}
	}
});

