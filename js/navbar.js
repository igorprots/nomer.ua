// $(".nav-link").on("click", function(e) {
//     $("a.nav-link").removeClass("is-active");
//     $(this).addClass("is-active");
// });

$(document).ready(() => {
    $('.nav-toggle').click(() => {
        $('.nav').toggleClass('is-active')
    })
})