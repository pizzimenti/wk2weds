$(function() {
  $('#candidate form').submit(function(event) {
    event.preventDefault();
    var candidate = $("input#candidatename").val();
    if (candidate === "trump") {
    $('#trump').show();
    } else if (candidate === "sanders") {
    $('#sanders').show();
    }

  });
});
