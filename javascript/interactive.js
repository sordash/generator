$(document).ready(function() {
  // $(".button").click(function() {
  //   $(".ball").addClass("animate");
  //   setTimeout(function() {
  //   $(".ball").removeClass("animate");
  // }, 4000);

  var $skinSpan = $(".skin, .face");
  $(".yellow").click(function() {
    $skinSpan.css("background-color", "#FFC145");
    $(".stars1, .mouth1").show();
    $(".stars2, .mouth2").hide();
  });

  $(".pink").click(function() {
    $skinSpan.css("background-color", "#FF6B6C");
      $(".stars1, .mouth1").hide();
      $(".stars2, .mouth2").show();
  });

  $(".blue").click(function() {
    $skinSpan.css("background-color", "#999CC2");
    $(".stars1, .mouth1").show();
    $(".stars2, .mouth2").hide();
  });

  $(function() {
    $(".third img").draggable({
      // revert: "invalid",
      cursor: "move",
      zIndex: 2
    });
    $(".face").droppable({
      accept: ".third img",
      zIndex: 1
    })
  });
})
