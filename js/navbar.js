// $(".nav-link").on("click", function(e) {
//     $("a.nav-link").removeClass("is-active");
//     $(this).addClass("is-active");
// });

$(document).ready(function() {
    $('.nav-toggle').click(function() {
        $('.nav').toggleClass('is-active')
    })
})