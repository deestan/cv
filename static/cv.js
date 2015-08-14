$(function() {
  $(".product").on('click', function(evt) {
    var el = $(evt.target).closest(".product");
    el.toggleClass("visible");
  });
});
