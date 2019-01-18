$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var question1Input = $("input#question1").val();
    var question2Input = $("input#question2").val();
    var question3Input = $("input#question3").val();
    var question4Input = $("input#question4").val();
    var question5Input = $("input#question5").val();

    $("#question1").val("");
    $("#question2").val("");
    $("#question3").val("");
    $("#question4").val("");
    $("#question5").val("");

    var trackPath = ""

    if (question1Input === "Ruby") {
      trackPath = "Front-End Developer"
    } else {
      trackPath = "Back-End Developer"
    }

    if ((question4Input === "designing") &&
        (trackPath === "Front-End Developer")) {
      trackPath = "Front-End Developer"
    } else if(trackPath === "Back-End Developer") {
      trackPath = "Back-End Developer"
    } else{
      trackPath = "You need to re-evaluate your choices."
    }

    if ((question2Input === "front-end") &&
        (trackPath === "Front-End Developer")) {
      trackPath = "Front-End Developer"
    } else if(trackPath === "Back-End Developer") {
      trackPath = "Back-End Developer"
    } else {
      trackPath = "You need to re-evaluate your choices."
    }

    if ((question5Input === "interactive web applications") &&
        (trackPath === "Front-End Developer")){
      trackPath = "Front-End Developer"
    } else  if(((question5Input === "high-performance applications") ||
               (question5Input === "internal software"))  &&
               (trackPath === "Back-End Developer")){
      trackPath = "Back-End Developer"
    } else{
      trackPath = "You need to re-evaluate your choices."
    }

    if ((question3Input === "working for a large company on business software") &&
        (trackPath === "Front-End Developer")) {
        trackPath === "Front-End Developer"
     } else if(((question3Input === "working as an android developer") ||
              (question3Input === "working for a startup/smaller companies")) &&
              (trackPath === "Back-End Developer")) {
        trackPath = "Back-End Developer"
     } else {
       trackPath = "You need to re-evaluate your choices."
     }

    alert("Your trackpath is " + trackPath)
    event.preventDefault();
  });
});
