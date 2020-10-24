$("#services").hover(function () {
    $(".dropdown-1").css("padding-top", "0");
    $(".dropdown-1").animate({
        paddingTop: '10px'
    }, 500);
}, function () {
    $(".dropdown-1").stop();
});


$("#projects").hover(function () {
    $(".dropdown-2").css("padding-top", "0");
    $(".dropdown-2").animate({
        paddingTop: '10px'
    }, 500);
}, function () {
    $(".dropdown-2").stop();
});


$(".hover-left").hover(function () {
    // $(this).parent().css("padding-left", "20px")
    $(this).parent().stop();
    $(this).parent().animate({
        paddingLeft: '40px'
    }, 500);
}, function () {
    $(this).parent().stop();
    // $(this).parent().css("padding-left", "20px");
    $(this).parent().animate({
        paddingLeft: '20px'
    }, 300);
});


$(function() {
    var div = $('body');
    var width = div.width();
    
    div.css('height', width);
});


$(".Header-menu-nav-button").on("click", function () {
    if ($("Header").is(".menu-nav-links-show")) {
        $(".Header").removeClass("menu-nav-links-show")
    } else {
        $(".Header").addClass("menu-nav-links-show")
    }
})

// $("#services").on("click", function () {
//     $(".dropdown-1").css("display", "block")
// })


// if ($(window).width() < 768) {
//     // $("ul li ul").removeClass("dropdown-1")
// } else if ($(window).width() > 768) {
//     // $("ul").addClass("dropdown-1")
// }