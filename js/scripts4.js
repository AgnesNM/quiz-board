//Business Logic
var add = function(q1, q2, q3, q4) {
  return q1 + q2 + q3 + q4;
};

//UI Logic
$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    function check() {
      var q1 = $("input:radio [name=q1]:checked").val();
      var q2 = $("input:radio [name=q2]:checked").val();
      var q3 = $("input:radio [name=q3]:checked").val();
      var q4 = $("input:radio [name=q4]:checked").val();
      var score = 0;
      if (q1 === "b") {
        score = +25;
      }
      if (q2 === "b") {
        score += 25;
      }
      if (q3 === "c") {
        score += 25;
      }
      if (q4 === "a") {
        score += 25;
      }

      function check(score) {
        return "Your score is " + parseInt(q1 + q2 + q3 + q4) + "%";
      }
      $('#total').text(check(score));
    }
  });

  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
});
