// this is the date of the current day//

var today = moment("05/28/2021");
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
// determine time function//
function determineTime(){
    var currentTime = moment().hour();
    console.log(currentTime);
    var timeBlock = 8;
    for (i = 8; i < 18; i++) {
        console.log(timeBlock);
        console.log(i);
        if (timeBlock < currentTime){
            $("#" + i + "hr").addClass("past");
        } else if (timeBlock == currentTime) {
            $("#" + i + "hr").addClass("present");
        } else if (timeBlock > currentTime) {
            $("#" + i + "hr").addClass("future");
        }
        timeBlock++;
    }
}
// call determine time function//
determineTime();

// save to local storage//

$("#8h").on("click", function(){
    localStorage.setItem("8am", $("#8hr").val());
})

$("#8hr").text(localStorage.getItem("8am"));

$("#9h").on("click", function(){
    localStorage.setItem("9am", $("#9hr").val());
})

$("#9hr").text(localStorage.getItem("9am"));

$("#10h").on("click", function(){
    localStorage.setItem("10am", $("#10hr").val());
})

$("#10hr").text(localStorage.getItem("10am"));

$("#11h").on("click", function(){
    localStorage.setItem("11am", $("#11hr").val());
})

$("#11hr").text(localStorage.getItem("11am"));

$("#12h").on("click", function(){
    localStorage.setItem("12am", $("#12hr").val());
})

$("#12hr").text(localStorage.getItem("12am"));

$("#13h").on("click", function(){
    localStorage.setItem("13am", $("#13hr").val());
})

$("#13hr").text(localStorage.getItem("13am"));

$("#14h").on("click", function(){
    localStorage.setItem("14am", $("#14hr").val());
})

$("#14hr").text(localStorage.getItem("14am"));

$("#15h").on("click", function(){
    localStorage.setItem("15am", $("#15hr").val());
})

$("#15hr").text(localStorage.getItem("15am"));

$("#16h").on("click", function(){
    localStorage.setItem("16am", $("#16hr").val());
})

$("#16hr").text(localStorage.getItem("16am"));

$("#17h").on("click", function(){
    localStorage.setItem("17am", $("#17hr").val());
})

$("#17hr").text(localStorage.getItem("17am"));