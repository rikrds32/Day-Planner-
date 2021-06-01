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