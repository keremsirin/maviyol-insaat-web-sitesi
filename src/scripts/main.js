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


$(function () {
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

var click_services = 0;
if ($(window).width() < 768) {
    // $("ul").removeClass("dropdown-1")

    $("#services").click(function () {
        click_projects = 0;
        if (click_services == 0) {
            $(".dropdown-2").css("display", "none")
            $("#services").removeClass("hover-border_mobile")
            $("#services").addClass("hover-border")
            $(".dropdown-1").css("display", "block");
            click_services++;
            console.log(click_services);
        } else {
            $(".dropdown-1").css("display", "none");
            $("#services").removeClass("hover-border")
            $("#services").addClass("hover-border_mobile")
            click_services--;
        }
        return false;
    })
} else if ($(window).width() > 768) {
    // $("ul").addClass("dropdown-1")
}


var click_projects = 0;
if ($(window).width() < 768) {
    $("#projects").click(function () {
        click_services = 0;


        if (click_projects == 0) {
            $(".dropdown-1").css("display", "none")
            $("#projects").removeClass("hover-border_mobile")
            $("#projects").addClass("hover-border")
            $(".dropdown-2").css("display", "block");
            click_projects++;
            console.log(click_projects);
        } else {
            $(".dropdown-2").css("display", "none");
            $("#projects").removeClass("hover-border")
            $("#projects").addClass("hover-border_mobile")
            click_projects--;
        }
        return false;
    })
} else if ($(window).width() > 768) {
    // $("ul").addClass("dropdown-1")
}




$(document).ready(function () {
    var refresh = true;
    if (($(window).width() > 480) && ($(window).width() < 768)) {
        refresh = false;
    }
    $(window).resize(function () {
        if (($(window).width() > 480) && ($(window).width() < 768)) {
            if (refresh == true) location.reload();
        } else {
            refresh = true;
        }
    });

    if (($(window).width() > 768) && ($(window).width() < 1200)) {
        refresh = false;
    }
    $(window).resize(function () {
        if (($(window).width() > 768) && ($(window).width() < 1200)) {
            if (refresh == true) location.reload();
        } else {
            refresh = true;
        }
    });

});

$('.homepage-slider').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    autoPlay: 10000,
    pauseAutoPlayOnHover: false
});

$(".homepage-slider").on("mouseleave", function () {
    $(this).flickity("playPlayer");
});

$(window).on('load', function () {
        $('.preloader').addClass('complete')
})