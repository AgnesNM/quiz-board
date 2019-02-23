//Business Logic
var correctAnswers = [".alert();","f!== 15","//jQuery function","numbers = []"];
var correctPoints = 4;

function percent(points){
  return "Your score is " + parseInt((points/16)*100) + "%";
}

$(document)ready(function()){
  $("form#quiz").submit(function(event){
    $("#total").text('');
    var score = 0;
    var Ans1 = ($("input[type=radio][name=q1]:checked").val());
    var Ans2 = ($("input[type=radio][name=q2]:checked").val());
    var Ans3 = ($("input[type=radio][name=q3]:checked").val());
    var Ans4 = ($("input[type=radio][name=q4]:checked").val());

    if (Ans1 === answers[0]){
      score += correctPoints;
      }
      if (Ans2 === answers[1]){
        score += correctPoints;
        }
        if (Ans3 === answers[2]){
          score += correctPoints;
          }
          if (Ans4 === answers[3]){
            score += correctPoints;
            }
            $("#total").text(percent(score));
  });
  event.preventDefault();
};
