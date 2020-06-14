$(".nav-item").on("click", function(e) {
    $("a.nav-item").removeClass("is-active");
    $(this).addClass("is-active");
});