$("#services").hover(function () {
    $(".dropdown-1").css("padding-top", "0");
    $(".dropdown-1").animate({
        paddingTop: '10px'
    }, 500);
}, function () {
    $(".dropdown-1").stop();
});
$("dropdown-1").hover(function () {
    $(this).css("padding-top", "10px");
}, function () {});

$("#projects").hover(function () {
    $(".dropdown-1").css("padding-top", "0");
    $(".dropdown-1").animate({
        paddingTop: '10px'
    }, 500);
}, function () {
    $(".dropdown-1").stop();
});
$("dropdown-1").hover(function () {
    $(this).css("padding-top", "10px");
}, function () {});