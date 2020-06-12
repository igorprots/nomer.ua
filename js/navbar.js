$(".nav-item").on("click", function(e) {
    $("a.nav-item").removeClass("active");
    $(this).addClass("active");
});