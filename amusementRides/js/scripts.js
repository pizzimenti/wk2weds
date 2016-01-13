$(function(){
  var height = parseInt(prompt("How tall are you?"));

  if (height >=48) {
    $("#tall").show();
  } else if (height <24) {
    $(alert("We have no rides for infants. Sorry."))
  }    else {
    $("#short").show();
  }
});
