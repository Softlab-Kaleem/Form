function check() {
    var c = 0;
    var q1 = document.quize.question1.value;
    var q2 = document.quize.question2.value;
    var q3 = document.quize.question3.value;
    var q4 = document.quize.question4.value;
    var q5 = document.quize.question5.value;
    if (q1 == "Hyper Text Markup Language") { c++ }
    if (q2 == "A link") { c++ }
    if (q3 == "container tag") { c++ }
    if (q4 == "BASE") { c++ }
    if (q5 == "white, black and gray") { c++ }

    document.write("You have scored ", c);
}

var mins = 2;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;

setTimeout(Decrement, 1000);

function Decrement() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if (currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("timerText").innerHTML = currentMinutes + ":" + currentSeconds;
    if (secs !== -1) setTimeout('Decrement()', 1000);
}