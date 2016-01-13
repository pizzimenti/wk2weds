$(function() {
    $('#lc-login').click(function() {
      var animal = prompt("What animal do you want to learn about? Turtles, snakes, or insects?"));

      if (animal === turtles) {
        window.location.replace("turtles.html")
      else if (animal ===
      }






        var animal = $('#username').val();
        var pass = $('#pass').val();

        if (testUser(username) === true && testPass(pass) === true) {
            window.location.replace("http://www.domain.com/home.html");
        } else {
            alert('warning message');
        }
    });
});
