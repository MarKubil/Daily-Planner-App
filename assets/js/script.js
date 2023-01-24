// Variables for current day on the top.
var currentDay = $("#currentDay");
var today = moment();
currentDay.text(today.format("dddd, Do MMMM YYYY"));

// Variable to access the time blocks on the page 
var timeBlocks = $(".time-block");

// Variable to access the current time.
var currentTime = new Date().getHours();

// Variables to store user input into local storage.
var textAreas = $(".description");
var saveBtn = $(".saveBtn");


// Function to access all elements that have a class "time-block".
timeBlocks.each(function() {
    // 
    var time = parseInt($(this).attr("data-time"));

    // Changes block colors by current time.
    if(time < currentTime) {
        $(this).addClass("past");
    } else if (time === currentTime) {
        $(this).addClass("present");
    } else {
        $(this).addClass('future');
    }
});

// Load data stored in localStorage.
textAreas.each(function(index) {
    var key = "textArea" + index;
    $(this).val(localStorage.getItem(key));
});

// Button to save user input.
saveBtn.on("click", function() {
    var textA = $(this).siblings(".description");
    var areaIndex = textAreas.index(textA);
    var key = "textArea" + areaIndex;
    localStorage.setItem(key, textA.val());
});