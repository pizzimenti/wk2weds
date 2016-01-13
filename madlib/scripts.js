$(document).ready(function() {



  $('#blanks form').submit(function(event) {
    var blanks = ["person1","person2","insult","weather","bodypart","toolname","activity","clothing"]
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

// Lines 15-22 = line 8
// Lines 25-32 = Line 9

// var person1Input = $("input#person1").val();
// var person2Input = $("input#person2").val();
// var insultInput = $("input#insult").val();
// var weatherInput = $("input#weather").val();
// var bodypartInput = $("input#bodypart").val();
// var toolnameInput = $("input#toolname").val();
// var activityInput = $("input#activity").val();
// var clothingInput = $("input#clothing").val();
//
//
//     $('.person1').append(person1Input);
//     $('.person2').append(person2Input);
//     $('.insult').append(insultInput);
//     $('.weather').append(weatherInput);
//     $('.bodypart').append(bodypartInput);
//     $('.toolname').append(toolnameInput);
//     $('.activity').append(activityInput);
//     $('.clothing').append(clothingInput);

    $('#story').show();

    event.preventDefault();
  });
});
