$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1Input = $("input#question1").val();
    var question2Input = $("input#question2").val();
    var question3Input = $("input#question3").val();
    var question4Input = $("input#question4").val();
    var question5Input = $("input#question5").val();

    // $("question1").text("");
    // $("question2").text("");
    // $("question3").text("");
    // $("question4").text("");
    // $("question5").text("");

    var trackPath = ""

    if (question1Input === "Ruby") {
      trackPath = "Front-End Developer"
    } else {
      trackPath = "Back-End Developer"
    }

    if (question4Input === "designing") {
        trackPath = "Front-End Developer"
    } else {
      trackPath = "Back-End Developer"
    }


    if (question5Input === "interactive web applications") {
        trackPath = "Front-End Developer"
    } else  if((question5Input === "high-performance applications") ||
               (question5Input === "internal software")){
      trackPath = "Back-End Developer"
    }

    if (question3Input === "working for a large company on business   software")
        trackPath = "Front-End Developer"




    alert('submit ' + question1Input + " " + question2Input + " " + question3Input + " " + question4Input + " " + question5Input)
    alert("Your trackpath is " + trackPath)
    event.preventDefault();
  });
});
