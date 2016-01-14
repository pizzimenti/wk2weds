$(function() {
  $('#candidate form').submit(function(event) {
    event.preventDefault();
    var candidate = $("input#candidatename").val().toLowerCase();

    $(".candidates").hide();
    if (candidate === "trump") {
      $('#trump').show();
      $('body').removeClass();
      $('body').addClass("FireBrick");
      // Above is an example of how you should be indenting these. #indent
    } else if (candidate === "sanders") {
    $('#sanders').show();
    $('body').removeClass();
    $('body').addClass("DarkBlue");
  } else if (candidate === "clinton") {
    $('#clinton').show();
    $('body').removeClass();
    $('body').addClass("LightBlue");
  } else if (candidate === "cruz") {
    $('#cruz').show();
    $('body').removeClass();
    $('body').addClass("Pink");
    } else {
    $('#chooseAnother').show();
    }

  });
});
