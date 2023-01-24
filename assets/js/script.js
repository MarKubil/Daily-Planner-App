// Variables for current day on the top.
var currentDay = $("#currentDay");
var today = moment();
currentDay.text(today.format("dddd, Do MMMM YYYY"));

// Variable to access the time blocks on the page 
var timeBlocks = $(".time-block");