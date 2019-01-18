$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1Input = $("input#question1").val();
    var question2Input = $("input#question2").val();
    var question3Input = $("input#question3").val();
    var question5Input = $("input#question4").val();
    var question6Input = $("input#question5").val();


    alert('submit ' + question1Input + " " + question1Input + " " + question1Input + " " + question1Input + " + question1Input )
    event.preventDefault();
  });
});
