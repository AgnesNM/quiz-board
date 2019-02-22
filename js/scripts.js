$(document).ready(function() {
  $("form#quiz").submit(function(event) {

    var answers = ["q1Ans1", "q1Ans2", "q1Ans3", "q2Ans1", "q2Ans2", "q2Ans3", "q3Ans1", "q3Ans2", "q3Ans3", "q3Ans2", "q4Ans1", "q4Ans2", "q4Ans3",
      "q5Ans1", "q5Ans2", "q5Ans3"
    ];

    answers.forEach(function(answer) {
      var userInput = $("input#" + answer).val();
      $("#" + answer).text(userInput);
    });
    event.PreventDefault();
  });
});
