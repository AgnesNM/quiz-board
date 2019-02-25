//Business Logic
var add = function(q1, q2, q3, q4) {
  return q1 + q2 + q3 + q4;
};
var percentage = function(q1, q2, q3, q4) {
  return ((q1 + q2 + q3 + q4) / 16) * 100;
};
//UI Logic
$(document).ready(function() {
      $("form#quiz").submit(function(event) {
        event.preventDefault();
        var q1 = $("input:radio[name=q1]:checked").val();
        var q2 = $("input:radio[name=q2]:checked").val();
        var q3 = $("input:radio[name=q3]:checked").val();
        var q4 = $("input:radio[name=q4]:checked").val();
        var score = 0;
        var points = 4;
        var answers = [".alert();", "f!== 15", "//jQuery function", "var numbers = []"];
        if (q1 === answers[0]) {
          score += points;
        }
        if (q2 === answers[1]) {
          score += points;
        }
        if (q3 === answers[2]) {
          score += points;
        }
        if (q4 === answers[3]) {
          score += points;
        } else {

        }
        
        $('#total').text(percentage(score));

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
