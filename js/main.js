$(function () {
    //slider
    $('.sliderblock__box__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1118,
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 842,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ]
    });
    //form
    $("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
            alert("Massage was send");
			setTimeout(function() {
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

//map

function initMap(){
    var opt = {
        center: {lat: 37.626331231999856,  lng: -121.0174503018566},
        zoom: 17
    }

   var map = new google.maps.Map(document.getElementById("map"), opt)

   var marker = new google.maps.Marker({
       position: {lat: 37.626331231999856,  lng: -121.0174503018566},
       map: map,
       title: "701 Chicago Avenue, California"
   })
}