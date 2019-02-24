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
