


//UI Logic
      $(document).ready(function() {
        $("button#green").click(function() {
          $("body").removeClass();
          $("body").addClass("green-background");
        });

        $("button#blue").click(function() {
          $("body").removeClass();
          $("body").addClass("blue-background");
        });
            });

            //Business Logic
            var add = function(q1, q2,q3,q4) {
            return q1 + q2 + q3 + q4;
            };
            var percentage = function(q1,q2,q3,q4) {
            return ((q1 + q2 + q3 + q4)/16)*100;
            };
            //UI Logic
            $(document).ready(function() {
            $("form#quiz").submit(function(event) {
            event.preventDefault();
            var q1 = parseInt($("input:radio [name=q1]:checked").val());
            var q2 = parseInt($("input:radio [name=q2]:checked").val();
            var q3 = parseInt($("input:radio [name=q3]:checked").val());
            var q4 = parseInt($("input:radio [name=q4]:checked").val());
            var result = percentage((q1 + q2 + q3 + q4)/16)*100
            $("#total").text("Your score is " + result);
            });

            });


            //Business Logic
            var add = function(q1, q2,q3,q4) {
            return q1 + q2 + q3 + q4;
            };
            var percentage = function(q1,q2,q3,q4) {
            return ((q1 + q2 + q3 + q4)/16)*100;
            };
            //UI Logic
            $(document).ready(function() {
            $("form#quiz").submit(function(event) {
            event.preventDefault();
            var q1 = parseInt($("input:radio [name=q1]:checked").val());
            var q2 = parseInt($("input:radio [name=q2]:checked").val();
            var q3 = parseInt($("input:radio [name=q3]:checked").val());
            var q4 = parseInt($("input:radio [name=q4]:checked").val());
            var points = 0;
            for (var index = 0; index <4; index ++) {
              points = points + 4;
            }
            var answers = [".alert();","f!== 15", "//jQuery function","var numbers = []"];
            if q1 ==== answers[0];



            var result = percentage((q1 + q2 + q3 + q4)/16)*100
            $("#total").text("Your score is " + result);
            });

            });
