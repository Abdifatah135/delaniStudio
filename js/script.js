$(document).ready(function() {
  /*$("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });*/
  $(".image001").click(function() {
    $(".image001").hide(1200);
    $(".para001").toggle(1200);
    $(".para001").show(1200);
  });
  $(".para001").click(function() {
    $(".para001").hide(1200);
    $(".image001").toggle(1200);
    $(".image001").show(1200);
  });
});
