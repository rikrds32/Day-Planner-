// this is the date of the current day//

var today = moment("05/28/2021");
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
// determine time function//
function determineTime(){
    var currentTime= parseInt(moment().format("HH"));

}