$(document).ready(function () {
	$(".burger").click(function (event) {
		$(".burger,.header__row-list").toggleClass("active");
		$("body").toggleClass("lock");
	})
	$(".slider").slick({
		draggable: false,
		infinite: false,
	});
	$(".sliderok").slick({
		slidesToShow: 1,
		fade: true,
		infinite: false,
		asNavFor: ".slippers",
	});
	$(".slippers").slick({
		arrows: false,
		fade: false,
		slidesToShow: 2,
		infinite: false,
		asNavFor: ".sliderok",
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	});
	$(".work__body-top__row-btn").click(function (event) {
		$(".hide__btn,.work__body-top__row-btn,.work__body-bot__row-cols").toggleClass("active");
	});
	$(".hide__btn.active").click(function (event) {
		$(".hide__btn.active,.work__body-top__row-btn.active,.work__body-bot__row-cols.active").removeClass("active");
	});

	$(".consult__left-body-rows-menu").click(function (event) {
		$(".consult__left-body-rows-menu,.add__menu").toggleClass("active");
	});
});