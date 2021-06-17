$(window).on("scroll", function () {
  if ($(window).scrollTop() > $("#cambio").offset().top - 50) {
    $("ul").addClass("active");
  } else {
    $("ul").removeClass("active");
  }
});
